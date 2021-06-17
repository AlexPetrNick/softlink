import {applyMiddleware, combineReducers, createStore} from 'redux';
import pageNewsReducer from "./pageNewsReducer";
import userControlReducer from "./userControlReducer";
import newDetailReducer from "./newDetailReducer";
import cabinetReducer from "./cabinetReducer";
import hardPageReducer from "./hardPageReducer"
import thunkMiddleware from "redux-thunk"
import { authReducer } from './authReducer';

let reducers = combineReducers({
    pageNews: pageNewsReducer,
    pageUser: userControlReducer,
    pageNew: newDetailReducer,
    pageCabinet: cabinetReducer,
    pageHard: hardPageReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));



export default store;