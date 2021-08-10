import store from './store';
import { bugAdded , bugResolved} from './actions'
// import * as actions from './actionTypes' 

store.subscribe(() => {
  console.log('Store changed', store.getState());
})

store.dispatch(bugAdded("bug1"));
store.dispatch(bugResolved(1));


console.log(store.getState());






















// old way to create dispatch action funcation above we use factory funcation


// store.dispatch({
//   type: actions.BUG_ADDED,
//   payload:{
//     description: 'bug1'
//   }  
// })

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload : {
//     id : 1
//   }
// })