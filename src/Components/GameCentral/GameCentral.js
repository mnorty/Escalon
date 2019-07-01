import React,{Component} from 'react'
import './GameCentral.css'
import GameDisplay from './GameDisplay'

class GameCentral extends Component {


  render() {
    return(
      <div >
        <header className='navBar'>
          <div className='navBarLinks'>
            <button className='navButton'>GameList</button>
            <button className='navButton'>GameCentral</button>
            <button className='navButton'>Login</button>
            <button className='navButton'>SignUp</button>
            <button className='navButton'>Account</button>
          </div>
        </header>
        <div className='gameCentralHeader'>
          <div className='gameCentralLogo'>Game Central</div>
        </div>
        <body className='gameCentralContainer'>
          <div className='createGameContainer'>
            <button className='centralCreateButton'>CREATE GAME</button>
          </div>
          <div className='gameDisplayContainer'>
            <div className='gameDisplay'>
              <GameDisplay/>
            </div>
          </div>
        </body>
      </div>
    )
  }
}

export default GameCentral