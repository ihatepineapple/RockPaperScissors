export function updateScore(data) {
  return {
    type: "GAME_PLAY",
    payload: data,
  };
}
