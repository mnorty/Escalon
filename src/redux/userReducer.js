const initialState = {
    username: '',
    roomID: ''
}

const SET_USERNAME = 'SET_USERNAME' 
const SET_ROOMID = 'SET_ROOMID'

function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case SET_ROOMID:
            return {
                ...state,
                roomID: action.payload
            }
        default:
            return state
    }
}

export const setUsername = (username) => {
    return {
        type: SET_USERNAME,
        payload: username
    }
}

export const setRoomID = (roomID) => {
    console.log(roomID)
    return {
        type: SET_ROOMID,
        payload: roomID
    }
}

export default reducer