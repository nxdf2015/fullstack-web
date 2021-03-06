import {createStore,combineReducers} from 'redux'

import anecdotesReducer from "./reducers/anecdoteReducer"
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/anecdotesFilter'

console.log(anecdotesReducer)
const reducer = combineReducers({
    anecdotes : anecdotesReducer,
    notification : notificationReducer,
    filter : filterReducer
})


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store 