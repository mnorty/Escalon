import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Hero from '../src/Hero/Hero'
import Register from '../src/Register/Register'
import GameCentral from '../src/Components/GameCentral/GameCentral'



export default (
    <Switch>
        <Route exact path='/' component={Hero} />
        <Route path='/register' component={Register} />
        <Route path='/gamecentral' component={GameCentral}/>
    </Switch>
)