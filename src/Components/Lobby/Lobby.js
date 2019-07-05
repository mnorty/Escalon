import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { loadGameDetails, setGameID } from "../../redux/userReducer";
import io from "socket.io-client";
import "./Lobby.css";

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: "",
      room: null,
      currentUsers: []
    };
  }

  componentDidMount() {
    this.socket = io();
    this.socket.on("room joined", data => {
      this.joinSuccess(data);
    });
    this.joinRoom()
    const { id } = this.props.match.params;
    axios
      .get(`/getgame/${id}`)
      .then(res => {
        this.props.loadGameDetails(res.data);
        console.log(res.data);
      })
      .catch(err => {
        this.props.history.push("/join");
        console.log(err.message);
      });

  }

  joinRoom = () => {
      this.socket.emit("join room", this.props.match.params.id
      );
  }
  joinSuccess = (currentUsers) => {
    this.setState({
     currentUsers
    });
  }

  leaveRoom = () => {
    this.socket.emit("leave room", this.props.gameInfo.username, this.props.gameInfo.gameID)
    this.props.history.push('/join')
  }

  render() {
    // console.log(this.props)
    const currentSession = this.state.currentUsers.map((ele, i) => {
      console.log(ele)
      return <p key={i}>{ele.username}</p>
    })
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
            {currentSession}
            <button className="lobbyBtn">Start Game</button>
            <button className="leaveBtn" onClick={this.leaveRoom}>Leave Game</button>
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
  mapDispatchToProps
)(Lobby);
