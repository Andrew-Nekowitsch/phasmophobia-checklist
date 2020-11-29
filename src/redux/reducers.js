import { POSITIVE, NEGATIVE } from "./actions";
const STATE = [0,1,2];
const initialState = {
  clueList: [0, 0, 0, 0, 0, 0],
  clueCount: 0,
  ghostData: [
    { name: 'Shade', emf: true, orb: true, writing: true, temps: false, box: false, finger: false, active: false },
    { name: 'Phantom', emf: true, orb: true, writing: false, temps: true, box: false, finger: false, active: false },
    { name: 'Jinn', emf: true, orb: true, writing: false, temps: false, box: true, finger: false, active: false },
    { name: 'Revenant', emf: true, orb: false, writing: true, temps: false, box: false, finger: true, active: false },
    { name: 'Oni', emf: true, orb: false, writing: true, temps: false, box: true, finger: false, active: false },
    { name: 'Banshee', emf: true, orb: false, writing: false, temps: true, box: false, finger: true, active: false },
    { name: 'Yurei', emf: false, orb: true, writing: true, temps: true, box: false, finger: false, active: false },
    { name: 'Mare', emf: false, orb: true, writing: false, temps: true, box: true, finger: false, active: false },
    { name: 'Poltergeist', emf: false, orb: true, writing: false, temps: false, box: true, finger: true, active: false },
    { name: 'Demon', emf: false, orb: false, writing: true, temps: true, box: true, finger: false, active: false },
    { name: 'Spirit', emf: false, orb: false, writing: true, temps: false, box: true, finger: true, active: false },
    { name: 'Wraith', emf: false, orb: false, writing: false, temps: true, box: true, finger: true, active: false }
  ],
};


function reducer(state = initialState, action) {
  function ghostSort(row1, row2) {
    let checkmarks = [];
    for (let i = 0; i < state.clueList.length; i++) {
      if (state.clueList[i] === 1) {
        checkmarks.push(i);
      }
    }
  
    if (state.clueCount >= 3) {
      if (row1[checkmarks[0]] === row1[checkmarks[1]] === row1[checkmarks[2]] === true) {
        return -1;
      }
      if (row2[checkmarks[0]] === row2[checkmarks[1]] === row2[checkmarks[2]] === true) {
        return 1;
      }
    }
  }
  var x = state.clueList;
  var countModifier = 0;

  switch (action.type) {
    case POSITIVE:
      if (x[action.clue] !== STATE[1]) { 

        // found all 3 clues?
        if (state.clueCount >= 3) {
          return {
            clueList: x,
            clueCount: state.clueCount,
            ghostData: state.ghostData.sort(ghostSort()),
          };
        }

        // unset or X-Mark -> checkmark
        x[action.clue] = STATE[1];
        countModifier = 1;
      } else {

        // checkmark -> unset
        x[action.clue] = STATE[0];
        countModifier = -1;
      }
      return {
        clueList: x,
        clueCount: state.clueCount + countModifier,
        ghostData: state.ghostData.sort(ghostSort()),
      };
    case NEGATIVE:
      if (x[action.clue] === STATE[1]) {

        // checkmark -> X-Mark
        countModifier = -1;
        x[action.clue] = STATE[2];
      } else if (x[action.clue] === STATE[2]) {

        // X-Mark -> unset
        x[action.clue] = STATE[0];
      } else {

        // unset -> X-Mark
        x[action.clue] = STATE[2];
      }
      return {
        clueList: x,
        clueCount: state.clueCount + countModifier,
        ghostData: state.ghostData.sort(ghostSort()),
      };
    default:
      return state;
  }
}
export default reducer;
