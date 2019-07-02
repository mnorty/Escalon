import {createStore, combineReducers} from 'redux'
import userReducer from './userReducer'
import adminReducer from './userReducer'

const reducers = combineReducers({userReducer, adminReducer})

export default createStore(reducers)