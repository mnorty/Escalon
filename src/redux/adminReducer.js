const initialState = {
    roomID: '',
    user: {}
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
                return {...state, user: action.payload}
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

export default reducer