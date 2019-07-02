import React,{Component} from 'react'
import '../GameCreate/GameCreateModal.css'
import './AddQuestionModal.css'
import QuestionDisplay from './QuestionDisplay'


class AddQuestionModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      question:'',
      remediation:'',
      answer:'',
      distractor1:'',
      distractor2:'',
      distractor3:''
    }
  }

  handleInputUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

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
                <input 
                type="text" 
                className='questionDetailsInput'
                name='question'
                onChange={this.handleInputUpdate}
                />
                <p>Remediation</p>
                <input 
                type="text" 
                className='questionDetailsInput'
                name='remediation'
                onChange={this.handleInputUpdate}
                />
                <p>Answer</p>
                <input 
                type="text" 
                className='questionDetailsInput'
                name='answer'
                onChange={this.handleInputUpdate}
                />
                <p>Distractor 1</p>
                <input 
                type="text" 
                className='questionDetailsInput'
                name='distractor1'
                onChange={this.handleInputUpdate}
                />
                <p>Distractor 2</p>
                <input 
                type="text" 
                className='questionDetailsInput'
                name='distractor2'
                onChange={this.handleInputUpdate}
                />
                <p>Distractor 3</p>
                <input 
                type="text" 
                className='questionDetailsInput'
                name='distractor3'
                onChange={this.handleInputUpdate}
                />
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
