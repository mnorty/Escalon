import React, { Component } from 'react'
import './GameCreateModal.css'


class GameCreateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      instructions: '',
      template: ''
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

    const clickFunction = () => {
      closeCreateModel();
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
              name='title'
              onChange={this.handleInputUpdate}
            />
            <p>Game Instructions</p>
            <input
              type="text"
              name='instructions'
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
export default GameCreateModal
