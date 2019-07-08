import React, { Component } from 'react';
import {connect} from 'react-redux'
import './GameDisplayCard.css'
import axios from 'axios'

class Card extends Component {

  handleDeleteGame = () => {
    axios.delete(`/deletegame/${this.props.game.id}`)
    .then(res => {
    })
}

  render() {
    const { game_title,game_intro,gameroom_id} = this.props.game;


    return (      
    <div  className='cardContainer'>
    <p>Game Intro: {game_intro}</p>
    <p>Game Name: {game_title}</p>
    <p>Game Room id:{gameroom_id}</p>
    <button className='cardBtn'>Edit</button>
    <button className='cardBtn'>Share</button>
    <button 
    className='cardBtn'
    onClick={this.handleDeleteGame}
    >Delete</button>
  </div>
)
}
}
export default connect(null,)(Card)