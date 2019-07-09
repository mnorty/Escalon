import React, { Component } from 'react';
import GameQuestion from './GameQuestion';
import LeaderBoard from './LeaderBoard';
import BgDirt from './BackgroundItems/BgDirt';
import './Game.css';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            completedToggle: false,
            score: 0,
            timer: 30,
            questions: [
                { question: 'question 3', remediation: 'this is remediation 3', answer: 'answer3', distractor1: 'distractor12', distractor2: 'distractor23', distractor3: 'distractor33' },
                { question: 'question 2', remediation: 'this is remediation 2', answer: 'answer2', distractor1: 'distractor12', distractor2: 'distractor22', distractor3: 'distractor32' },
                { question: 'question 1 questi 1111 question 111 akl;sdjfkl; aksdj f;alkdjsf dsa', remediation: 'this is remediation 1', answer: 'answer1', distractor1: 'distractor11', distractor2: 'distractor21', distractor3: 'distractor31' }]
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
        const { score, questions } = this.state;
        return (
            <div className='playGameCont'>
                {(this.state.completedToggle === false)
                    ? (
                        <div>
                            <GameQuestion
                                handleScoreUpdate={this.handleScoreUpdate}
                                questions={questions}
                                handleGameCompledToggle={this.handleGameCompledToggle}
                                score={score} />
                        </div>
                    ) : (
                        <div>
                            <LeaderBoard
                                score={score} />
                        </div>
                    )}
            </div>
        )
    }
}

export default Game;