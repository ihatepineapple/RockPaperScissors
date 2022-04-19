const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GAME_PLAY": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
