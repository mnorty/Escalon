import React, { Component } from 'react'
import '../GameCreate/GameCreateModal.css'
import './AddQuestionModal.css'
import QuestionDisplay from './QuestionDisplay'
import { connect } from 'react-redux';
import axios from 'axios'

class AddQuestionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game_id: this.props.MotherGame,
      question: '',
      remediation: '',
      answer: '',
      distractor1: '',
      distractor2: '',
      distractor3: ''
    }
  }
  

  handleInputUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    // console.log(this.state)
  }

  render() {
    const motherGameid = this.props.MotherGame
    console.log(this.props.MotherGame,motherGameid)

    const closeAddQuestion = () => {
      this.props.closeAddQuestion('false')
    }

    const addQuestionFunction = () => {
      axios.post('/game/addquestion', )
      .then(res => {
        console.log('addQuestion hit in Modal')
      })
    }

    const doubleQuestion = () => {
      closeAddQuestion();
      addQuestionFunction()
    } 

    return (
      <div id='gameCreateModal' className='modal'>
        <div className='gameCreateModalContent'>
          <div className='gameCreateModalHeader'>
            <h3>Questions For: Game Title Here</h3>
            <button onClick={closeAddQuestion}>X</button>
          </div>
            <div className='CreateGameEntryContBtn'>
              <button 
              id='modalCreateBtn'
              onClick={addQuestionFunction}
              >add question</button>
          </div>
          
          
          <div className='CreateGameEntryCont'>
            <p>Question</p>
            <input
              type="text"
              name='question'
              onChange={this.handleInputUpdate}
            />
            <p>Remediation</p>
            <input
              type="text"
              name='remediation'
              onChange={this.handleInputUpdate}
            />
            <p>Answer</p>
            <input
              type="text"
              name='answer'
              onChange={this.handleInputUpdate}
            />
            <p>Distractor</p>
            <input
              type="text"
              name='distractor1'
              onChange={this.handleInputUpdate}
            />
            <p>Distractor</p>
            <input
              type="text"
              name='distractor2'
              onChange={this.handleInputUpdate}
            />
            <p>Distractor</p>
            <input
              type="text"
              name='distractor3'
              onChange={this.handleInputUpdate}
            />
          </div>
            <div className='questionDisplayCont'>
            <QuestionDisplay />
            <QuestionDisplay />
            <QuestionDisplay />
            <QuestionDisplay />
          </div>
        </div>
        
      </div>





      // <div id='gameCreateModal' className='modal'>
      //   <div className='gameCreateModalContent'>
      //     <div className='headerContainer'>
      //       <header id='CreateModalHeader'>
      //       <h3>Create Game</h3>
      //       <button onClick={closeAddQuestion}>X</button>
      //       </header>
      //     </div>
      //       <div className='questionBtnContainer' >
      //         <button className='centralCreateButton' id='addQuestionButton'>ADD QUESTION</button>
      //       </div>
      //       <div className='questionContainer'>
      //         <div className='QuestionDetails'>
      //           <p>Question</p>
      //           <input 
      //           type="text" 
      //           className='questionDetailsInput'
      //           name='question'
      //           onChange={this.handleInputUpdate}
      //           />
      //           <p>Remediation</p>
      //           <input 
      //           type="text" 
      //           className='questionDetailsInput'
      //           name='remediation'
      //           onChange={this.handleInputUpdate}
      //           />
      //           <p>Answer</p>
      //           <input 
      //           type="text" 
      //           className='questionDetailsInput'
      //           name='answer'
      //           onChange={this.handleInputUpdate}
      //           />
      //           <p>Distractor 1</p>
      //           <input 
      //           type="text" 
      //           className='questionDetailsInput'
      //           name='distractor1'
      //           onChange={this.handleInputUpdate}
      //           />
      //           <p>Distractor 2</p>
      //           <input 
      //           type="text" 
      //           className='questionDetailsInput'
      //           name='distractor2'
      //           onChange={this.handleInputUpdate}
      //           />
      //           <p>Distractor 3</p>
      //           <input 
      //           type="text" 
      //           className='questionDetailsInput'
      //           name='distractor3'
      //           onChange={this.handleInputUpdate}
      //           />
      //           <p>spacer</p>
      //         </div>
      //       </div>
      //       <div className='questionDisplayContainer'>
      //         <div className='questionDisplay'>
      //           <QuestionDisplay/>
      //           <QuestionDisplay/>
      //           <QuestionDisplay/>
      //           <QuestionDisplay/>

      //         </div>
      //       </div>
      //   </div>
      // </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return{
    user:reduxState
  }
}

export default  connect(mapStateToProps)(AddQuestionModal)
