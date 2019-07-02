import React,{Component} from 'react'
import './GameCreateModal.css'


class GameCreateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      instructions:'',
      template: ''
    }
  }

  handleInputUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

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
            </header>
            <span className='closeBtn' onClick={closeCreateModel}></span>
          </div>
          <div className='CreateGameEntryContainer'>
            <div className='CreateGameEntry'>
              <p className='entryTitles'>Game Title</p>
              <input 
              type="text"
              name='title'
              onChange={this.handleInputUpdate}
              />
              <p className='entryTitles'>Game Instructions</p>
              <input 
              type="text"
              name='instructions'
              onChange={this.handleInputUpdate}
              />
              <p className='entryTitles'>Game Template</p>
              {/* <input 
              type="text"
              name='template'
              onChange={this.handleInputUpdate}
              /> */}
              <select
               name="template"
                id="templateDropDown"
                onChange={this.handleInputUpdate}
                >
                <option value="Game1">Game 1</option>
                <option value="Game2">Game 2 </option>
                <option value="Game3">Game 3</option>
              </select>
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
