import React, { Component } from 'react';
import './GameQuestion.css';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            remediationShowing: false,
            question: {},
            questionCount: null
        }
    }

    componentDidMount() {
        this.handleGetQuestion()
    }

    handleGetQuestion = () => {
        const { questions } = this.props
        let questionCount = questions.length
        this.setState({
            questionCount,
            question: questions[questionCount - 1]
        })
    }

    handleSetQuestion = () => {
        const { questions } = this.props;
        const { questionCount } = this.state;
        this.setState({
            question: questions[questionCount - 1]
        })
    }

    handleAnswerClicked = (e) => {
        if (e.target.value === this.state.question.answer) {
            console.log('correct')
            this.props.handleScoreUpdate();
        } else {
            console.log('incorrect')
        }
        this.handleRemediationToggle();
    }

    handleRemediationToggle = () => {
        this.setState({
            remediationShowing: !this.state.remediationShowing
        })
    }

    handleNextQuestion = () => {
        const { questionCount } = this.state;
        if (questionCount !== 1) {
            this.setState({
                questionCount: this.state.questionCount -= 1
            })
            this.handleSetQuestion();
            this.handleRemediationToggle();
        } else if (questionCount === 1) {
            console.log('quiz completed')
            this.props.handleGameCompledToggle();
        }
    }

    handleRandomAnswers = () => {
        const { answer, distractor1, distractor2, distractor3 } = this.state.question;
        const answersArr = [answer, distractor1, distractor2, distractor3];
        let i = answersArr.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = answersArr[i];
            answersArr[i] = answersArr[j];
            answersArr[j] = temp;
        }
        return answersArr
    }

    render() {
        console.log('count', this.state.questionCount)
        const randomAnswers = this.handleRandomAnswers();
        const answerBtns = randomAnswers.map((answerChoice, ind) => {
            return (
                <div key={ind}><button value={answerChoice} onClick={this.handleAnswerClicked}>{answerChoice}</button></div>
            )
        })
        const { question, remediation } = this.state.question;
        return (
            <div>
                <div className='playSetupCont'>
                    <div className='playSetupScreen'>
                        <h2>{question}</h2>
                    </div>
                    {(this.state.remediationShowing === false)
                        ? (
                            <div className='playSetubBtns'>
                                {answerBtns}
                            </div>
                        ) : (
                            <div className='playSetupRemediation'>
                                <div className='playSetupRemediationInside'>
                                    <h3>{remediation}</h3>
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