import React,{Component} from 'react'
import './GameCreateModal.css'


class GameCreateModal extends Component {
  render(){
    return(
      <div id='gameCreateModal' className='modal'>
        <div className='gameCreateModalContent'>
          <span className='closeBtn'>&times;</span>
        <h1>GameCreateModal</h1>
        </div>
      </div>
    )
  }
}
export default GameCreateModal
