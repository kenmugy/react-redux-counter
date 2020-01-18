import { createStore } from 'redux';
import allReducers from './reducers';
// import {taskAction} from './actions/taskAction'
// import userAction from './actions/userAction'

const store = createStore(allReducers);
store.dispatch(taskAction)

export default store;
