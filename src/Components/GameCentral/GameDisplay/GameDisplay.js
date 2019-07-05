import React,{Component} from 'react'
import GameCard from '../GameCard/GameCard'
import { connect } from 'react-redux';
import {requestUserGames} from '../../../redux/adminReducer'
import GameDisplayCard from './GameDisplayCard'

class GameDisplay extends Component{
  constructor(props){
    super(props)
  }
  
  
  render(){
    console.log('GameDisplay Props',this.props)
    
    // let game = this.props.game.map((games => <GameDisplayCard key={game.id} game={game} />)) || []
    return(
      <div>
      {/* {game} */}
      <h1>Hi I am a game</h1>
    </div>
    )
  }
}


function mapStateToProps(reduxState) {
  return{
    user:reduxState
  }
}

export default connect(mapStateToProps,{requestUserGames})(GameDisplay)