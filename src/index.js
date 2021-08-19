import configureStore from './store/configureStore';
import { projectAdded } from './store/projects'
import { bugAdded, bugResolved, getUnresolvedBugs } from './store/bugs'


const store = configureStore();

store.subscribe(() => {
  console.log('Store changed', store.getState());
})

store.dispatch(projectAdded({name : 'Project 1'}));
store.dispatch(projectAdded({name : 'Project 2'}));
store.dispatch(projectAdded({name : 'Project 3'}));
// store.dispatch(projectAdded({name : 'Project 4'}));
// store.dispatch(projectAdded({name : 'Project 5'}));
// store.dispatch(projectAdded({name : 'Project 6'}));

store.dispatch(bugAdded({description : 'Bug 1'}));
store.dispatch(bugAdded({description : 'Bug 2'}));
store.dispatch(bugAdded({description : 'Bug 3'}));
// store.dispatch(actions.bugAdded({description : 'Bug 2'}));
// store.dispatch(actions.bugAdded({description : 'Bug 3'}));
// store.dispatch(bugResolved({id: 1}));

// console.log('false bugs list = ' ,store.getState().entities.bugs.filter(bug => !bug.resolved))

// const falseBugs = getUnresolvedBugs(store.getState())

// console.log('false bugs list == ', falseBugs)

// console.log(store.getState());






















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