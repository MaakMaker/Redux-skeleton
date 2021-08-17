// import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
// import bugsReducer from "./bugs";
import reducer from "./reducer";
// import usersReducer from "./users";


export default function() {
  return configureStore({ reducer });
}


// const reducer = () => {
//   return configureStore({projectsReducer});
// }

// export default reducer;


// export default combineReducers({
//   bugs: bugsReducer,
//   projects: projectsReducer,
//   users: usersReducer
// });
