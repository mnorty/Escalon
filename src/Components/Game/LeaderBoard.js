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
        console.log('LB props', this.props)
        const currentSession = this.props.gameInfo.users.map((ele, i) => {
            return <h3 key={i}>{ele.username}</h3>;
        });
        return (
            <div className='leaderBoardCont'>
                <div className='leaderBoardBoxsCont'>
                    <div className='leaderUsersBox'>
                        <h1>Leader Board</h1>
                        {currentSession}
                    </div>
                    <div className='leaderImgBox'>
                        <img src='https://yellingyak.com/wp-content/uploads/2019/07/rr_logo.png' />
                    </div>
                </div>
                <button>LEAVE GAME</button>
            </div>
        )
    }
}


function mapStateToProps(reduxState) {
    return {
        gameInfo: reduxState.userReducer
    }
}

const mapDispatchToProps = {
    loadGameDetails,
    setGameID,
    lobbyUsers,
    userScore
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);