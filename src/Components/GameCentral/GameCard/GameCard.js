import React,{Component} from 'react'
import './GameCard.css'

class GameCard extends Component {
  render() {
    return(
      <>
      <div className='listingContainer'>
          <p>I'm a game title here</p>
        <div className='listingBtnContainer'>
          <button>r</button>
          <button>s</button>
          <button>e</button>
          <button>d</button>
        </div>
      </div>
      </>
    )
  }
}

export default GameCard