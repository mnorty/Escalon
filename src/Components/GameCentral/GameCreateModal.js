import React,{Component} from 'react'
import './GameCreateModal.css'


class GameCreateModal extends Component {
  render(){
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
    return(
      <div id='gameCreateModal' className='modal'>
        <div className='gameCreateModalContent'>
          <div className='headerContainer'>
            <header id='CreateModalHeader'>
                <h4 className='progressHeader'>Create Game</h4>
                <p>|</p>
                <h4 className='progressHeader'>Add Questions</h4>
                <p>|</p>
                <h4 className='progressHeader'>Add Answers</h4>
            </header>
            <span className='closeBtn' onClick={closeCreateModel}>&times;</span>
          </div>
          <div className='CreateGameEntryContainer'>
            <div className='CreateGameEntry'>
              <p className='entryTitles'>Game Title</p>
              <input type="text"></input>
              <p className='entryTitles'>Game Instructions</p>
              <input type="text"></input>
              <p className='entryTitles'>Game Template</p>
              <input type="text"></input>
              <div  className='nextContainer'>
               <button className='centralCreateButton' id='modalCreateBtn' onClick={clickFunction}>NEXT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default GameCreateModal
