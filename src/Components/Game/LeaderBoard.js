import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    loadGameDetails,
    setGameID,
    lobbyUsers
  } from "../../redux/userReducer";
import './LeaderBoard.css';

class LeaderBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {

    }

    render() {
        const currentSession = this.props.gameInfo.users.map((ele, i) => {
            return <p key={i}>{ele.username}</p>;
          });
        return (
            <div className='leaderBoardCont'>
                <div className='leaderBoardBoxsCont'>
                    <div className='leaderUsersBox'>
                        <h1>Leader Board</h1>
                        {currentSession}
                    </div>
                    <div className='leaderChatBox'>Chat Box Here</div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(reduxState){
    return {
      gameInfo: reduxState.userReducer
    }
}

const mapDispatchToProps = {
    loadGameDetails,
    setGameID,
    lobbyUsers
  };

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);