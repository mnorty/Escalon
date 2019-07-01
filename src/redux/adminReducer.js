const initialState = {
    roomID = ''
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
        default:
            return state
    }
}


export default reducer