import { POSITIVE, NEGATIVE } from "./actions";
const STATE = [0,1,2];
const COLUMNS = ["emf", "orb", "writing", "temps", "box", "finger"];
const INITIALSTATE = {
  clueList: [0, 0, 0, 0, 0, 0],
  clueCount: 0,
  ghostData: [
    { name: 'Shade', emf: true, orb: true, writing: true, temps: false, box: false, finger: false, count: 0, active: true, id: 0 },
    { name: 'Phantom', emf: true, orb: true, writing: false, temps: true, box: false, finger: false, count: 0, active: true, id: 1 },
    { name: 'Jinn', emf: true, orb: true, writing: false, temps: false, box: true, finger: false, count: 0, active: true, id: 2 },
    { name: 'Revenant', emf: true, orb: false, writing: true, temps: false, box: false, finger: true, count: 0, active: true, id: 3 },
    { name: 'Oni', emf: true, orb: false, writing: true, temps: false, box: true, finger: false, count: 0, active: true, id: 4 },
    { name: 'Banshee', emf: true, orb: false, writing: false, temps: true, box: false, finger: true, count: 0, active: true, id: 5 },
    { name: 'Yurei', emf: false, orb: true, writing: true, temps: true, box: false, finger: false, count: 0, active: true, id: 6 },
    { name: 'Mare', emf: false, orb: true, writing: false, temps: true, box: true, finger: false, count: 0, active: true, id: 7 },
    { name: 'Poltergeist', emf: false, orb: true, writing: false, temps: false, box: true, finger: true, count: 0, active: true, id: 8 },
    { name: 'Demon', emf: false, orb: false, writing: true, temps: true, box: true, finger: false, count: 0, active: true, id: 9 },
    { name: 'Spirit', emf: false, orb: false, writing: true, temps: false, box: true, finger: true, count: 0, active: true, id: 10 },
    { name: 'Wraith', emf: false, orb: false, writing: false, temps: true, box: true, finger: true, count: 0, active: true, id: 11 },
  ],
};

function clueCounter(clueList, clueCount, table_ghostData) {
  console.log({clueList, clueCount, table_ghostData})
  for (let row_ghostData of table_ghostData) {
    let counter = 0;
    row_ghostData.active = true;
    for (const column of COLUMNS) {
      let columnIndex = COLUMNS.indexOf(column);
      if (row_ghostData[column] === true) {
        if (clueList[columnIndex] === STATE[1]) {  
          counter++;
        } else if (clueList[columnIndex] === STATE[2]) {  
          row_ghostData.active = false;
        } 
      }
    }
    row_ghostData.count = counter;
  }
  return table_ghostData;
}

function reducer(state = INITIALSTATE, action) {
  var countModifier = 0;

  switch (action.type) {
    case POSITIVE:
      
      // 👌 or ✖ -> ✔
      if (state.clueList[action.clue] !== STATE[1]) { 

        // found all 3 clues?
        if (state.clueCount >= 3) {
          break;
        }

        state.clueList[action.clue] = STATE[1];
        countModifier = +1;

        // ✔ -> 👌
      } else {
        state.clueList[action.clue] = STATE[0];
        countModifier = -1;
      }
      break;
    case NEGATIVE:

      // ✔ -> ✖
      if (state.clueList[action.clue] === STATE[1]) {
        countModifier = -1;
        state.clueList[action.clue] = STATE[2];

        // ✖ -> 👌
      } else if (state.clueList[action.clue] === STATE[2]) {
        state.clueList[action.clue] = STATE[0];

        // 👌 -> ✖
      } else {
        state.clueList[action.clue] = STATE[2];
      }
      break;
    default:
      break;
  }
  return {
    clueList: state.clueList,
    clueCount: state.clueCount + countModifier,
    ghostData: [...clueCounter(state.clueList, state.clueCount + countModifier, state.ghostData).sort(function (row1, row2) {
      const firstThenSecond = -1, secondThenFirst = 1, sameOrder = 0;
      if (row1.active === false && row2.active === false) {
        if (row1.count > row2.count) {
          return firstThenSecond;
        }
        if (row1.count < row2.count) {
          return secondThenFirst;
        }
        if (row1.count === row2.count) {
          return (row1.id < row2.id ?  firstThenSecond : secondThenFirst);
        }
      }

      if (row1.active === true && row2.active === true) {
        if (row1.count > row2.count) {
          return firstThenSecond;
        }
        if (row1.count < row2.count) {
          return secondThenFirst;
        }
        if (row1.count === row2.count) {
          return (row1.id < row2.id ?  firstThenSecond : secondThenFirst);
        }
      }

      if (row1.active !== row2.active) {
        if (!row1.active) {
          return secondThenFirst;
        } else {
          return firstThenSecond;
        }
      } 
      console.log("same order???")
      return sameOrder;
    }),
    ]};
}
export default reducer;
