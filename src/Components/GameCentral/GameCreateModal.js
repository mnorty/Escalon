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
          <span className='closeBtn' onClick={closeCreateModel}>&times;</span>
        </div>
      </div>
    )
  }
}
export default GameCreateModal
