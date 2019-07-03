import './QuestionDisplay.css'

import React,{Component} from 'react'


class QuestionDisplay extends Component {
  render() {
    return(
      <>
      <div className='questionCard'>
        <div>Question is here with Char Limit... </div>
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