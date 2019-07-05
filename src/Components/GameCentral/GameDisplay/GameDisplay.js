import React from 'react'
// import GameCard from '../GameCard/GameCard'


export default function GameDisplay({...props}){
  
    console.log(props)
    let games = props.userGames
    let game = games.map(game => <GameDisplayCard key={game.id} game={game} />)
    return(
        <div>
            {this.props.userGames ? game : null}
            <h1>Hi I am a game</h1>
        </div>
    )
}