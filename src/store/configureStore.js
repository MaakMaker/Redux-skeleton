import { configureStore } from '@reduxjs/toolkit'
import reducer from "./reducer";

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
