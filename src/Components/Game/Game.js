import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            remediationShowing: false,
            score: 0,
            question: { answer: 'answer' },
            questionCount: 3
        }
    }

    handleNextQuestion = () => {
        const { questionCount } = this.state;
        if (questionCount !== 1) {
            this.setState({
                questionCount: this.state.questionCount -= 1
            })
            this.handleRemediationToggle();
        } else if (questionCount === 1) {
            console.log('quiz completed')
        }
    }

    handleBtnClicked = (e) => {
        if (e.target.value === this.state.question.answer) {
            console.log('correct')
            const addScore = this.state.score +=100
            this.setState({
                score: addScore
            })
        } else {
            console.log('incorrect')
        }
        this.handleRemediationToggle();
    }

    handleRandomAnswers = () => {
        const answersArr = ['answer', 'distractor1', 'distractor2', 'distractor3']
        let i = answersArr.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = answersArr[i];
            answersArr[i] = answersArr[j];
            answersArr[j] = temp;
        }
        return answersArr
    }

    handleRemediationToggle = () => {
        this.setState({
            remediationShowing: !this.state.remediationShowing
        })
    }

    render() {
        const randomAnswers = this.handleRandomAnswers();
        const answerBtns = randomAnswers.map((answerChoice, ind) => {
            return (
                <div key={ind}><button value={answerChoice} onClick={this.handleBtnClicked}>{answerChoice}</button></div>
            )
        })
        const { score } = this.state;
        return (
            <div className='playCont'>
                    <div className='playHeader'>
                        <h2>username</h2>
                        <div className='playHeaderScore'>
                            <h3>SCORE:</h3>
                            <h1>{score}</h1>
                        </div>
                    </div>
                    <div className='playSetupCont'>
                        <div className='playSetupScreen'>
                            <h2>Question text goes here…</h2>
                        </div>
                        {(this.state.remediationShowing === false)
                            ? (
                                <div className='playSetubBtns'>
                                    {answerBtns}
                                </div>
                            ) : (
                                <div className='playSetupRemediation'>
                                    <div className='playSetupRemediationInside'>
                                        <h3>remediation text here...</h3>
                                        <button onClick={this.handleNextQuestion}>Next</button>
                                    </div>
                                </div>
                            )}
                    </div>
            </div>
        )
    }
}

export default Game;