import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import '../GameQuestion.css';

class BgDirt extends Component {

    render() {
        return (
            <Spring
                from={{ opacity: 0, transform: 'translate3d(0,200px,0) scale(4) rotateX(0deg)' }}
                to={{ opacity: 1, transform: 'translate3d(0,0,0) scale(1) rotateX(0deg)' }}
                config={{ delay: 500, tension: 40, friction: 12 }} >
                {props => (<div style={props}>

                    <div className='spaceDirt'></div>

                </div>)}</Spring>

        )
    }
}

export default BgDirt;