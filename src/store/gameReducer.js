// const initialState = 0;

const initialState = {
  score: 0,
  userPick: "",
  housePick: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GAME_PLAY": {
      return {
        ...state,
        userPick: action.payload.user,
        housePick: action.payload.house,
      };
    }
    default: {
      return state;
    }
  }
}
