import React, { Component } from 'react'
import JoinGame from './JoinGame'
import './Game.css'

export default class Game extends Component {
    render() {
        return (
            <div className='gameBackGround'>
                <div className='headerSpacer'></div>
                <div className='gameCentralHeader'>
                    <div className='gameCentralLogo'>Join Game: $Game Name Pulled in</div>
                </div>
                <div className='joinContainer'>
                    <div className='joinContainer2'>
                        <JoinGame/>
                        {/* <p>UserName</p> */}
                        {/* <input type="text"/>
                        <p>Game Id</p>
                        <input type="text"/>
                        <button className='centralCreateButton'>Join Game</button> */}
                    </div>
                </div>
            </div>
        )
    }
}
