import React, { Component } from "react";
import axios from "axios";
import { setUsername } from "react-redux";
import { connect } from "react-redux";

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

  handleUserLogin = e => {
    e.preventDefault();
    const { username } = this.state;
    axios
      .post("/user", { username })
      .then(res => {
        this.props.history.push("/game");
      })
      .catch(err => {
        console.log(err);
        console.log(err.response.data);
      });
    e.target.username.value = "";
  };

  // handleJoinGameID = (e) => {
  //     e.preventDefault()
  //     const { gameID } this.state;
  //     axios
  //     .get('')
  // }

  render() {
    return (
      <div className="join-container">
        <form onSubmit={this.handleUserLogin}>
          <label className="username-input" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            onChange={this.handleLoginInfoUpdate}
          />
          <label className="gameID-input" htmlFor="gameID">
            Username
          </label>
          <input
            type="text"
            id="gameID"
            onChange={this.handleLoginInfoUpdate}
          />

          <button onClick={this.handle} />
        </form>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapStateToProps, setUsername)(JoinGame);
