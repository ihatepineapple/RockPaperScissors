export function updateScore(user, house) {
  return {
    type: "GAME_PLAY",
    payload: { user, house },
  };
}
