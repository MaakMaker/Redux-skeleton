import * as actions from "./actionTypes";

// []
let lastId = 0;

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id != action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true });
    default:
      return state;
  }
};
// function reducer (state = [], action) {
//   if(action.type === 'bugAdded')
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false
//       }
//     ];
//   else if (action.type === 'bugRemoved') {
//     return state.filter(bug => bug.id != action.payload.id);
//   }

//   return state;
// }

export default reducer;
