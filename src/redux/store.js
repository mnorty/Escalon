import {createStore, combineReducers, applyMiddleware} from 'redux'
import userReducer from './userReducer'
import adminReducer from './adminReducer'
import promiseMiddleware from 'redux-promise-middleware'

const reducers = combineReducers({userReducer, adminReducer})

export default createStore(reducers, applyMiddleware(promiseMiddleware))

