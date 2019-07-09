import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import '../GameQuestion.css';

class Question extends Component {

    render() {
        // const { question, remediation } = this.props.question
        // console.log('props', this.props.state)
        const { question, remediationShowing } = this.props.state
        return (
            <Spring
                from={{ opacity: 0, transform: 'translate3d(0,100px,0) scale(1) rotateX(0deg)' }}
                to={{ opacity: 1, transform: 'translate3d(0,0,0) scale(1) rotateX(0deg)' }}
                config={{ delay: 5000, tension: 60, friction: 7 }} >
                {props => (<div style={props}>

                    <div className='spaceQuestionBox'>
                        <div className='spaceBoxQuestion'>
                            <h2>{question.question}</h2>
                        </div>
                        {(remediationShowing === false)
                            ? (
                                <div className='spaceBoxBtns'>
                                    {this.props.answerBtns}
                                </div>
                            ) : (
                                <div className='spaceRemediationCont'>
                                    <h3>{question.remediation}</h3>
                                    <button onClick={this.props.handleNextQuestion}>Next</button>
                                </div>
                            )}
                    </div>

                </div>)}</Spring>

        )
    }
}

export default Question;