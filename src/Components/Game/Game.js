import React, { Component } from 'react';
import GameQuestion from './GameQuestion';
import TimerCountDown from './TimerCountDown';
import { connect } from 'react-redux'
import {
    loadGameDetails,
    setGameID,
    lobbyUsers
  } from "../../redux/userReducer";
import './Game.css';


class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            completedToggle: false,
            score: 0,
            timer: 30,
            questions: [
                { question: 'question 3', remediation: 'this is remediation 3', answer: 'answer', distractor1: 'distractor1', distractor2: 'distractor2', distractor3: 'distractor3' },
                { question: 'question 2', remediation: 'this is remediation 2', answer: 'answer', distractor1: 'distractor1', distractor2: 'distractor2', distractor3: 'distractor3' },
                { question: 'question 1111', remediation: 'this is remediation 1', answer: 'answer', distractor1: 'distractor1', distractor2: 'distractor2', distractor3: 'distractor3' }]
        }
    }

    componentDidMount() {
        this.handleGetGame();
    }

    handleGetGame = () => {
        // axios call to get game questions
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
    

    render() {
        console.log(this.props)
        const { score, questions } = this.state;
        return (
            <div>
                <div className='playHeader'>
                    <h2>{this.props.gameInfo.username}</h2>
                    <TimerCountDown />
                    <div className='playHeaderScore'>
                        <h3>SCORE:</h3>
                        <h1>{score}</h1>
                    </div>
                </div>
                {(this.state.completedToggle === false)
                    ? (
                        <GameQuestion
                            handleScoreUpdate={this.handleScoreUpdate}
                            questions={questions}
                            handleGameCompledToggle={this.handleGameCompledToggle}/>
                    ) : (
                        <div>
                            <h1>Game Over</h1>
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
    lobbyUsers
  };

export default connect(mapStateToProps, mapDispatchToProps)(Game);