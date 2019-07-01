import React,{Component} from 'react'
import '../GameCreateModal.css'
import './AddQuestionModal.css'


class AddQuestionModal extends Component {
  render(){
    const closeAddQuestion = () => {
      this.props.closeAddQuestion('false')
    }
    console.log(this.props)
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
            <span className='closeBtn' onClick={closeAddQuestion}>&times;</span>
          </div>
          <h1>Add Question Modal</h1>
        </div>
      </div>
    )
  }
}
export default AddQuestionModal
