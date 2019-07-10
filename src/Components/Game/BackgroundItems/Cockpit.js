import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import TimerCountDown from './TimerCountDown';
import '../GameQuestion.css';

class Cockpit extends Component {

    render() {
        const { score, username } = this.props;
        return (
            <Spring
                from={{ opacity: 0, transform: 'translate3d(0,100px,0) scale(1) rotateX(0deg)' }}
                to={{ opacity: 1, transform: 'translate3d(0,0,0) scale(1) rotateX(0deg)' }}
                config={{ delay: 4500, tension: 60, friction: 7 }} >
                {props => (<div style={props}>
                    <div className='cockpitCont'>
                        <div className='spaceHeader'>
                            <div className='spaceHeaderCaptain'>
                                <h4>captain</h4>
                                <h2>{username}</h2>
                            </div>
                            <TimerCountDown handleUpdateUser={this.props.handleUpdateUser} />
                            <div className='spaceHeaderScore'>
                                <h3>SCORE:</h3>
                                <h1>{score}</h1>
                            </div>
                        </div>
                        <div className='spaceCockpit'></div>
                    </div>
                </div>)}</Spring>

        )
    }
}

export default Cockpit;