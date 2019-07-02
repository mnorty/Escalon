const initialState = {
    username: '',
    GameID: ''
}

const SET_USERNAME = 'SET_USERNAME' 
const SET_GAMEID = 'SET_GAMEID'

export const setUsername = (username) => {
    return {
        type: SET_USERNAME,
        payload: username
    }
}

export const setGameID = (gameID) => {
    console.log(gameID)
    return {
        type: SET_GAMEID,
        payload: gameID
    }
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case SET_GAMEID:
            return {
                ...state,
                gameID: action.payload
            }
        default:
            return state
    }
}



export default reducer