import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// if you can make reducer and action that is optimise and code lessness and handy and recommned use it

let lastId = 0;

const slice = createSlice({
  name: "bug",
  initialState: [],
  reducers: {
    // actions => actions handlers
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
  },
});


export const { bugAdded, bugResolved } = slice.actions
export default slice.reducer;


// Redux toolkit building funcations that make actions, reducer for us,
// Actions creators

// export const bugAdded = createAction("bugAdded");
// export const bugResolved = createAction("bugResolved");
// export const bugRemoved = createAction("bugRemoved");

// Reducer


// export default createReducer([], {
//   // key :value
//   // actions: funcation (event => event handler)
//   [bugAdded.type]: (bugs, action) => {},
//   [bugRemoved.type]: (bugs, action) => {
//     const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//     bugs[index].resolved = true;
//   },
// });

// old redux pattern to create Actions like below

// export const bugAdded = description => ({
//   type: BUG_ADDED,
//     payload: {
//       description
//     }
// })

// export const bugResolved = id => ({
//   type: BUG_RESOLVED,
//   payload: {
//     id
//   }
// })

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case bugAdded.type:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case bugRemoved.type:
//       return state.filter((bug) => bug.id != action.payload.id);
//     case bugResolved.type:
//       return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true });
//     default:
//       return state;
//   }
// };

// export default reducer;
