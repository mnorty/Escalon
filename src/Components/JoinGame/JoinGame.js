import React, { Component } from "react";
import axios from "axios";
import { setUsername, setGameID } from "../../redux/userReducer";
import { connect } from "react-redux";
import "./JoinGame.css";

class JoinGame extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      gameID: ""
    };
  }

  handleLoginInfoUpdate = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    const { username, gameID } = this.state;
    // STORING USER IN SESSION
    axios
      .post("/user", { username })
      .then(({ data }) => {
        // SET USERNAME ON REDUX
        this.props.setUsername(data.username);
        // FINDING THE GAME TO JOIN
        return axios.post("/joingame", { gameID, username });
      })
      .then(({ data }) => {
        // console.log(data)
        this.props.setGameID(data.gameroom_id);
        // IF SUCCESSFUL, ENTERING GAME LOBBY COMPONENT
        this.props.history.push(`/game/${data.gameroom_id}`);
      })
      .catch(error => {
        if (error) throw error;
      });
  };

  render() {
    // console.log(this.props);
    return (
      <form className="join-container" onSubmit={this.handleLogin}>
        <label className="username-input" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          onChange={this.handleLoginInfoUpdate}
        />
        <label className="gameID-input" htmlFor="gameID">
          Game ID
        </label>
        <input type="text" id="gameID" onChange={this.handleLoginInfoUpdate} />
        <button type="submit">Join Game</button>
      </form>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(
  mapStateToProps,
  { setUsername, setGameID }
)(JoinGame);
