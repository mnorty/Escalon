import React,{Component} from 'react'
import './GameCard.css'

class GameCard extends Component {
  render() {
    return(
      <>
      <div className='cardCard'>
        <div className='NameContainer'>
          <p>Name: TEST NAME</p>
        </div>
        <div className='buttonContainer'>
          <button className='cardButton'></button>
          <button className='cardButton'></button>
          <button className='cardButton'></button>
          <button className='cardButton'></button>
        </div>
      </div>
      </>
    )
  }
}

export default GameCard