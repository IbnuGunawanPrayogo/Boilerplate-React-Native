import { createStore ,combineReducers, applyMiddleware } from "redux";
import { Thunk } from './middleware';

import Reducers from '../reducers/'

const RootReducers = combineReducers({
    Reducers
})

// const store = createStore(RootReducers,  applyMiddleware( promise));
export const store = createStore(RootReducers,  applyMiddleware(Thunk));