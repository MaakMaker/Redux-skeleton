import configureStore from './store/configureStore';
// import * as actions from './store/bugs'
import {projectAdded} from './store/projects'
// import * as actions from './actionTypes' 


const store = configureStore();

store.subscribe(() => {
  console.log('Store changed', store.getState());
})

store.dispatch(projectAdded({name : 'Project 1'}));
store.dispatch(projectAdded({name : 'Project 2'}));
store.dispatch(projectAdded({name : 'Project 3'}));

// store.dispatch(actions.bugAdded({description : 'Bug 1'}));
// store.dispatch(actions.bugAdded({description : 'Bug 2'}));
// store.dispatch(actions.bugAdded({description : 'Bug 3'}));
// store.dispatch(actions.bugResolved({id: 1}));

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