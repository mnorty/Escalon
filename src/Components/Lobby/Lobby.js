import React,{Component} from 'react'
import './Lobby.css'


class Lobby extends Component{


  render(){
    return(
      <div>
        <header className='gameCentralHeader'></header>
        <div className='lobbyContainer'>
          <div className='lobbybox'>
            
            <div className='lobbyDescription'>Game Instructions:
              
            </div>
            <div className='lobbyUsers'>
              
              
            </div>
            <button className='lobbyBtn'>Start Game</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Lobby