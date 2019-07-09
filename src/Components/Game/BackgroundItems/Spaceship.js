import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import '../GameQuestion.css';

class Spaceship extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0, transform: 'translate3d(800px,0,0) scale(0) rotateX(0deg)' }}
                to={{ opacity: 1, transform: 'translate3d(0,0,0) scale(1) rotateX(0deg)' }}
                config={{ delay: 2000, tension: 20, friction: 3 }} >
                {props => (<div style={props}>

                    <div className='spaceShipShip'>
                        <img src='https://yellingyak.com/wp-content/uploads/2019/07/game_spaceship.png' alt='spaceship' />
                    </div>

                </div>)}</Spring>

        )
    }
}

export default Spaceship;