import { createStore ,applyMiddleware} from "redux";
import {userReducer} from "./reduce/user";
import thunk from "redux-thunk"
import { combineReducers } from "redux";


const Reducers = combineReducers({

  userstore: userReducer


});

const store = createStore(Reducers,applyMiddleware(thunk));
export default store;