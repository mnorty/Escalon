const initialState = {
  users: [],
  gameID: "",
  game_title: "",
  game_intro: ""
};

const SET_USERNAME = "SET_USERNAME";
const SET_GAMEID = "SET_GAMEID";
const LOAD_GAME_DETAILS = "LOAD_GAME_DETAILS";
const LOBBY_USERS = "LOBBY_USERS";

export const setUsername = username => {
  return {
    type: SET_USERNAME,
    payload: username
  };
};

export const setGameID = gameID => {
  // console.log('Game ID Showing', gameID);
  return {
    type: SET_GAMEID,
    payload: gameID
  };
};

export const loadGameDetails = gameInfo => {
  // console.log('Game details loading..', gameInfo)
  return {
    type: LOAD_GAME_DETAILS,
    payload: gameInfo
  };
};

export const lobbyUsers = users => {
  return {
    type: LOBBY_USERS,
    payload: users
  };
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case SET_GAMEID:
      return {
        ...state,
        gameID: action.payload
      };
    case LOAD_GAME_DETAILS:
      const { game_title, game_intro } = action.payload;
      return { ...state, game_title, game_intro };
    case LOBBY_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export default reducer;
