import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Hero from '../src/Components/Hero/Hero'
import Register from '../src/Components/Register/Register'
import GameCentral from './Components/GameCentral/GameCentral/GameCentral'




export default (
    <Switch>
        <Route exact path='/' component={Register} />
        <Route path='/register' component={Hero} />
        <Route path='/gamecentral' component={GameCentral}/>
        
    </Switch>
)