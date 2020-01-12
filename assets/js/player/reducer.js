import { JOIN_ROOM, RECEIVE_ERROR } from "./actions";

const initialState = {
  room: null,
  channel: null,
  player: {
    name: null,
    is_lead: null
  },
  error: null,
  loading: true,
  scene: "game-start"
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case JOIN_ROOM:
      return {
        ...state,
        room: action.room,
        channel: action.channel,
        player: action.player,
        error: null,
        loading: false
      };
    case RECEIVE_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;