import React, { Component } from 'react';
import axios from 'axios';
import GameQuestion from './GameQuestion';
import LeaderBoard from './LeaderBoard';
import { connect } from 'react-redux'
import {
    loadGameDetails,
    setGameID,
    lobbyUsers,
    userScore
  } from "../../redux/userReducer";
import socket from '../Sockets';
import './Game.css';
import ReactAudioPlayer from 'react-audio-player'
import song from '../../Assets/GameTheme.wav'

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            completedToggle: false,
            score: 0,
            timer: 30,
            username: '',
            users: [],
            userID: null,
            questions: [
                { question: 'question 3', remediation: 'this is remediation 3', answer: 'answer3', distractor1: 'distractor12', distractor2: 'distractor23', distractor3: 'distractor33' },
                { question: 'question 2', remediation: 'this is remediation 2', answer: 'answer2', distractor1: 'distractor12', distractor2: 'distractor22', distractor3: 'distractor32' },
                { question: 'question 1 questi 1111 question 111 akl;sdjfkl; aksdj f;alkdjsf dsa', remediation: 'this is remediation 1', answer: 'answer1', distractor1: 'distractor11', distractor2: 'distractor21', distractor3: 'distractor31' }]
        }
    }

    componentDidMount() {
        this.handleGetGame();
        socket.on('finishedGame', (data) => {
            // console.log('data', data)
            this.setState({
                users: data
            })
        })
    }

    handleGetGame = () => {
        // axios call to get game questions
        const { username, id } = this.props.gameInfo.username;
        this.setState({
            username: username,
            userID: id
        })
    }


    handleScoreUpdate = () => {
        let { score } = this.state;
        let newScore = score += 100;
        this.setState({
            score: newScore
        })
    }

    handleGameCompledToggle = () => {
        this.setState({
            completedToggle: true
        })
    }

    handleUpdateUser = () => {
        const { gameID } = this.props.gameInfo;
        const { username, userID, score } = this.state;
        socket.emit('finish game', { gameID, username, userID, score })
        this.handleGameCompledToggle()

        // axios.put(`/user/${userID}`, { id: userID, username, score })
        //     .then( async ({ data }) => {
        //         // await this.props.userScore(data)
                
        //         this.handleGameCompledToggle()
        //     })
    }


    render() {
        
        console.log('game', this.props.gameInfo)
        const { users } = this.state
        const { score, questions, username } = this.state;
        return (
            <div className='playGameCont'>
            <ReactAudioPlayer src={song} autoPlay loop/>
                {(this.state.completedToggle === false)
                    ? (
                        <div>
                            <GameQuestion
                                handleScoreUpdate={this.handleScoreUpdate}
                                questions={questions}
                                handleUpdateUser={this.handleUpdateUser}
                                score={score}
                                username={username}/>
                        </div>
                    ) : (
                        <div>
                            <LeaderBoard
                                score={score}
                                username={username}
                                users={users}/>
                        </div>
                    )}
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
    lobbyUsers,
    userScore
  };

export default connect(mapStateToProps, mapDispatchToProps)(Game);