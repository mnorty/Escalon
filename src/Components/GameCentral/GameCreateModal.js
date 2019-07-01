import React,{Component} from 'react'
import './GameCreateModal.css'


class GameCreateModal extends Component {
  render(){
    const closeCreateModel = () => {
      this.props.callbackFromParent('false')
    }
    console.log(this.props)
    return(
      <div id='gameCreateModal' className='modal'>
        <div className='gameCreateModalContent'>
          <div className='headerContainer'>
            <header id='CreateModalHeader'>
                <h3 className='progressHeader'>Create Game</h3>
                <h3 className='progressHeader'>Add Questions</h3>
                <h3 className='progressHeader'>Add Answers</h3>
            </header>
            <span className='closeBtn' onClick={closeCreateModel}>&times;</span>
          </div>
          <body className='CreateGameEntryContainer'>
            <div className='CreateGameEntry'>
              <p className='entryTitles'>Game Title</p>
              <input type="text"></input>
              <p className='entryTitles'>Game Instructions</p>
              <input type="text"></input>
              <p className='entryTitles'>Game Template</p>
              <input type="text"></input>
              <div  className='nextContainer'>
               <button className='centralCreateButton' id='modalCreateBtn'>NEXT</button>
              </div>
            </div>
          </body>
        </div>
      </div>
    )
  }
}
export default GameCreateModal
