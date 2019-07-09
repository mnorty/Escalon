import React, { Component } from 'react';
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
        return (
            <div className='leaderBoardCont'>
                <div className='leaderBoardBoxsCont'>
                    <div className='leaderUsersBox'>
                        <h1>Leader Board</h1>
                        <p>Username   <span>1000</span></p>
                        <p>Username   <span>1000</span></p>
                        <p>Username   <span>1000</span></p>
                        <p>Username   <span>1000</span></p>
                    </div>
                    <div className='leaderChatBox'>Chat Box Here</div>
                </div>
            </div>
        )
    }
}

export default LeaderBoard;