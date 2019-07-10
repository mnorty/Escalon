import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../GameDisplay/GameDisplayCard.css'
import axios from 'axios'
import GameEditModal from '../GameEditModal/GameEditModal'

class Card extends Component {
  constructor(){
    super()
    this.state = {
      shareDisplay: 'false',
      editModal: 'false'
    }
  }

  handleDeleteGame = () => {
    axios.delete(`/deletegame/${this.props.game.id}`)
    .then(res => {
    })
}

  render() {
    const { game_title,game_intro,gameroom_id} = this.props.game;

    const toggleShareModal = () => {
      if(
        this.state.shareDisplay === 'true'
      ){this.setState({
        shareDisplay:'false'
      })}else {
        this.setState({
          shareDisplay:'true'
        })
      } 
    }

    const toggleEditModal = () => {
      if(
        this.state.shareDisplay === 'true'
      ){this.setState({
        editModal:'false'
      })}else {
        this.setState({
          editModal:'true'
        })
      } 
    }

    const closeEditModal = (dataFromChild) => {
      this.setState({
        editModal: dataFromChild
      })
    }


    return (      
    <div  className='cardContainer'>
    <p>Game Intro: {game_intro}</p>
    <p>Game Name: {game_title}</p>
    <button className='cardBtn'
    onClick={toggleEditModal}
    >Edit</button>
    <button
    className='cardBtn'
    onClick={toggleShareModal}
    >Share</button>
    <button 
    className='cardBtn'
    onClick={this.handleDeleteGame}
    >Delete</button>
    {this.state.shareDisplay !== 'false'
              ? <div id='modal' >Game Room id:{gameroom_id}</div>
              : null
            }
    {this.state.editModal !== 'false'
              ? <GameEditModal callbackFromParent = {closeEditModal}/>
              : null
            }
  </div>
)
}
}
export default connect(null,)(Card)