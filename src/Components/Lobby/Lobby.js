import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { loadGameDetails, setGameID } from "../../redux/userReducer";
import "./Lobby.css";

class Lobby extends Component {
  state = {
    user: ""
  };

  componenetDidMount() {
    axios
      .get("/getgame")
      .then(res => {
        this.props.loadGameDetails(res.data);
        console.log(res.data)
      })
      .catch(err => {
        this.props.history.push("/join");
        console.log(err.message);
      });
  }

  render() {
    return (
      <div>
        <header className="gameCentralHeader" />
        <div className="lobbyContainer">
          <div className="lobbybox">
            {this.props.gameInfo.game_title}
            <div className="lobbyDescription">
              Game Instructions:
              {this.props.gameInfo.game_intro}
            </div>
            <div className="lobbyUsers" />
            <button className="lobbyBtn">Start Game</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log(reduxState);
  return {
    gameInfo: reduxState.userReducer
  };
}

const mapDispatchToProps = {
  loadGameDetails,
  setGameID
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Lobby);
