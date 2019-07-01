import React,{Component} from 'react'
import './GameCentral.css'
import GameDisplay from './GameDisplay'
import GameCreateModal from './GameCreateModal'
import AddQuestionModal from './AddQuestionModal/AddQuestionModal'

class GameCentral extends Component {
  constructor(props){
    super(props)
    this.state= {
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
      console.log(dataFromChild)
      this.setState({
        CreateModal: dataFromChild
        })
        }
    const closeAddQuestion = (dataFromChild) => {
      console.log(dataFromChild)
      this.setState({
        AddQuestion: dataFromChild
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
            ?<GameCreateModal createDisplay={this.state.CreateModal} callbackFromParent={closeCreateModel} callbackForAddQuestion={openAddQuestion}/>
            :null
          }
            {this.state.AddQuestion !== 'false'
            ?<AddQuestionModal closeAddQuestion={closeAddQuestion}/>
            :null
          }
              {/* <GameCreateModal/> */}
              {/* <AddQuestionModal callbackFromParent={openAddQuestion}/> */}
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