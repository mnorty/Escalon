import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    loadGameDetails,
    setGameID,
    lobbyUsers,
    userScore
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
        // console.log('LB props', this.props)
        const { users } = this.props;
        const currentSession = users.map((ele, i) => {
            return <div key={i}>
                <h3>{ele.username}</h3>
                <h3>{ele.score}</h3>
            </div>;
        });
        return (
            <div className='leaderBoardCont'>
                <div className='leaderBoardBoxsCont'>
                    <div className='leaderUsersBox'>
                        <h1>Leader Board</h1>
                        {currentSession}
                        <button>LEAVE GAME</button>
                    </div>
                    <div className='leaderImgBox'>
                        <img src='https://yellingyak.com/wp-content/uploads/2019/07/rr_logo.png' alt='img' />
                    </div>
                </div>
            </div>
        )
    }
}


// function mapStateToProps(reduxState) {
//     return {
//         gameInfo: reduxState.userReducer
//     }
// }

// const mapDispatchToProps = {
//     loadGameDetails,
//     setGameID,
//     lobbyUsers,
//     userScore
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);

export default LeaderBoard;