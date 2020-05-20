// Action Creator
export const selectSong = (song) => {
  // return an action (must have a type, optionally have a payload)
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
