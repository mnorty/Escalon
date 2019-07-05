import React,{Component} from 'react'
import GameCard from '../GameCard/GameCard'
import { connect } from 'react-redux';
import {requestUserGames} from '../../../redux/adminReducer'

class GameDisplay extends Component{
  constructor(props){
    super(props)
  console.log('GameDisplay Props',this.props.userId)
  }


  render(){
    return(
      <div>
      <GameCard/>
      <GameCard/>
      <GameCard/>
      <GameCard/>
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