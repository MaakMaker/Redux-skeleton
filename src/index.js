import configureStore from './store/configureStore';
import * as actions from './store/bugs'
// import * as actions from './actionTypes' 


const store = configureStore();

store.subscribe(() => {
  console.log('Store changed', store.getState());
})

store.dispatch(actions.bugAdded("bug 1"));
store.dispatch(actions.bugResolved(1));


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