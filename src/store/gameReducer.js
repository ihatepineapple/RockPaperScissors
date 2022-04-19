// const initialState = 0;

const initialState = {
  score: 0,
  userPick: "",
  housePick: "",
};

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
