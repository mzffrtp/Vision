import { combineReducers, createStore, applyMiddleware } from "redux"
import { movieReducer } from "./reducer/movieReducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    movieReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;