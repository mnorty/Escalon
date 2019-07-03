import React, { Component } from "react";
// import axios from 'axios'
import { connect } from "react-redux";
import "./Lobby.css";

class Lobby extends Component {
  state = {
    users: ""
  };

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
  return {
    gameInfo: reduxState.userReducer
  };
}

export default connect(mapStateToProps)(Lobby);
