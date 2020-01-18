import {combineReducers} from 'redux'
import userReducer from './userReducer'
import tasksReducer from './taskReducer'

const allReducers = combineReducers({
    user: userReducer,
    tasks: tasksReducer
})

export default allReducers