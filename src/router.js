import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Hero from '../src/Components/Hero/Hero'
import Register from '../src/Components/Register/Register'
import GameCentral from '../src/Components/GameCentral/GameCentral'
import JoinGame from './Components/JoinGame/JoinGame';



export default (
    <Switch>
        <Route exact path='/' component={Hero} />
        <Route path='/register' component={Register} />
        <Route path='/gamecentral' component={GameCentral}/>
        <Route path='/join' component={JoinGame} />
    </Switch>
)