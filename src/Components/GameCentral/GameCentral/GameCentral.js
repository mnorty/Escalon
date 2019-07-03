import React, { Component } from 'react'
import './GameCentral.css'
import GameDisplay from '../GameDisplay/GameDisplay'
import GameCreateModal from '../GameCreate/GameCreateModal'
import AddQuestionModal from '../AddQuestionModal/AddQuestionModal'

class GameCentral extends Component {
  constructor(props) {
    super(props)
    this.state = {
      CreateModal: 'false',
      AddQuestion: 'false'
    }
  }

  render() {

    const openCreateModel = () => {
      this.setState({
        CreateModal: 'true'
      })
    }

    const openAddQuestion = () => {
      this.setState({
        AddQuestion: 'true'
      })
    }

    const closeCreateModel = (dataFromChild) => {
      this.setState({
        CreateModal: dataFromChild
      })
    }

    const closeAddQuestion = (dataFromChild) => {
      this.setState({
        AddQuestion: dataFromChild
      })
    }

    return (
      <div className='gameCentCont'>
        <div className='gameCentralHeader'>
          <h2>Game Central</h2>
        </div>
        <div>
          <div className='createGameContainer' >
            <button id='createGameModal' onClick={openCreateModel}>create game</button>

            {this.state.CreateModal !== 'false'
              ? <GameCreateModal createDisplay={this.state.CreateModal} callbackFromParent={closeCreateModel} callbackForAddQuestion={openAddQuestion} />
              : null
            }

            {this.state.AddQuestion !== 'false'
              ? <AddQuestionModal closeAddQuestion={closeAddQuestion} />
              : null
            }
            {/* <GameCreateModal/>
              <AddQuestionModal closeAddQuestion={closeAddQuestion}/>  */}
          </div>
          <div className='gamesDisplay'>
            <GameDisplay />
          </div>
        </div>
      </div>
    )
  }
}

export default GameCentral