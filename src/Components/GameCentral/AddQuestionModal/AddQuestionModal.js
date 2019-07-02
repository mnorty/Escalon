import React,{Component} from 'react'
import '../GameCreate/GameCreateModal.css'
import './AddQuestionModal.css'
import QuestionDisplay from './QuestionDisplay'


class AddQuestionModal extends Component {
  render(){
    const closeAddQuestion = () => {
      this.props.closeAddQuestion('false')
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
            <span className='closeBtn' onClick={closeAddQuestion}>&times;</span>
          </div>
            <div className='questionBtnContainer' >
              <button className='centralCreateButton' id='addQuestionButton'>ADD QUESTION</button>
            </div>
            <div className='questionContainer'>
              <div className='QuestionDetails'>
                <p>Question</p>
                <input type="text" className='questionDetailsInput'></input>
                <p>Remediation</p>
                <input type="text" className='questionDetailsInput'></input>
                <p>Answer</p>
                <input type="text" className='questionDetailsInput'></input>
                <p>Distractor 1</p>
                <input type="text" className='questionDetailsInput'></input>
                <p>Distractor 2</p>
                <input type="text" className='questionDetailsInput'></input>
                <p>Distractor 3</p>
                <input type="text" className='questionDetailsInput'></input>
                <p>spacer</p>
              </div>
            </div>
            <div className='questionDisplayContainer'>
              <div className='questionDisplay'>
                <QuestionDisplay/>
                <QuestionDisplay/>
                <QuestionDisplay/>
                <QuestionDisplay/>
                
              </div>
            </div>
        </div>
      </div>
    )
  }
}
export default AddQuestionModal
