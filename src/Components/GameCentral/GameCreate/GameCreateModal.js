import React, { Component } from 'react'
import './GameCreateModal.css'
import axios from 'axios'
import {connect} from 'react-redux'

class GameCreateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game_title: '',
      game_intro: '',
    }
  }

  handleInputUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  render() {
    const closeCreateModel = () => {
      this.props.callbackFromParent('false')
    }
    const opedAddQuestion = () => {
      this.props.callbackForAddQuestion('true')
    }

    const createGame = () => {
      let admins_id = (this.props.user.adminReducer.user.id)
      let game_title = (this.state.game_title)
      let game_intro = (this.state.game_intro)
      console.log('yo', this.props,this.state)
      axios.post('/game/create',{admins_id,game_title,game_intro})///add the information we are sending over.
      .then(res => {
        console.log('CreateGameModal', res.data)
      })
    }

    const clickFunction = () => {
      closeCreateModel();
      createGame();
      opedAddQuestion();
    }
    return (
      <div id='gameCreateModal' className='modal'>
        <div className='gameCreateModalContent'>
          <div className='gameCreateModalHeader'>
            <h3>Create Game</h3>
            <button onClick={closeCreateModel}>X</button>
          </div>
          <div className='CreateGameEntryCont'>
            <p>Game Title</p>
            <input
              type="text"
              name='game_title'
              onChange={this.handleInputUpdate}
            />
            <p>Game Instructions</p>
            <input
              type="text"
              name='game_intro'
              onChange={this.handleInputUpdate}
            />
            <div className='CreateGameEntryContBtn'>
              <button id='modalCreateBtn' onClick={clickFunction}>next</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return{
    user:reduxState
  }
}

export default connect(mapStateToProps)(GameCreateModal)
