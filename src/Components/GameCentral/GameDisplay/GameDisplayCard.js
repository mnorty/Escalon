import React, { Component } from 'react';
import {connect} from 'react-redux'
import './GameDisplayCard.css'

class Card extends Component {


  render() {
    console.log('made it to Game Display Card',this.props)
    const { game_title,game_intro,gameroom_id} = this.props.game;


    return (      
    <div  className='cardContainer'>
    <p>Game Intro: {game_intro}</p>
    <p>Game Name: {game_title}</p>
    <p>Game Room id:{gameroom_id}</p>
    <button className='cardBtn'>Edit</button>
    <button className='cardBtn'>Share</button>
    <button className='cardBtn'>Delete</button>
  </div>
)
}
}
export default connect(null,)(Card)