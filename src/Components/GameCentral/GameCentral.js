import React,{Component} from 'react'
import './GameCentral.css'
import GameDisplay from './GameDisplay'
import GameCreateModal from './GameCreateModal'
import modal from './GameCreateModal'

class GameCentral extends Component {
  constructor(props){
    super(props)
    this.state= {
      CreateModal: 'false'
    }
  }
  
  render() {
    
    
    const openCreateModel = () => {
      this.setState({
        CreateModal: 'true'
      })
    }
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
          <div className='createGameContainer' >
            <button className='centralCreateButton' id='createGameModal' onClick={openCreateModel}>CREATE GAME</button>
            {this.state.CreateModal !== 'false'
            ?<GameCreateModal/>
            :null
          }
              {/* <GameCreateModal/> */}
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