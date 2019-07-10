import './QuestionDisplay.css'

import React,{Component} from 'react'


class QuestionDisplay extends Component {
  render() {
    console.log(this.props.question)
    return(
      <>
      <div className='questionCard'>
        <div>{this.props.question.question}</div>
        <div className='qBtnContainer'>
          <button>e</button>
          <button>d</button>
        </div>
      </div>
      </>
    )
  }
}

export default QuestionDisplay