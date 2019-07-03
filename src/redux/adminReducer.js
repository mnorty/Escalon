import axios from 'axios'

const initialState = {
    roomID: '',
    user: {},
    games: {}
}

const SET_ROOMID = 'SET_ROOMID'

export const setRoomID = (roomID) => {
    console.log(roomID)
    return {
        type: SET_ROOMID,
        payload: roomID
    }
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_ROOMID:
            return {
                ...state,
                roomID: action.payload
            }
        case LOGIN_USER:
            return {...state, user: action.payload
            }
        case REQUEST_GAMES:
            return {...state, games: action.payload}
        default:
            return state
    }
}


const LOGIN_USER = 'LOGIN_USER'

export function login(user) {
    return {
        type: LOGIN_USER,
        payload: user,
    }
}

const REQUEST_GAMES = 'REQUEST_GAMES'

export const requestUserGames = () => {
    console.log('made it Admin Reducer')
    let game = axios.get('/gamecentral/games').then(res => res.data);
    console.log('Request Made for Games, waiting Response',game)
    return {
        type: REQUEST_GAMES,
        payload: game
    }
}

export default reducer