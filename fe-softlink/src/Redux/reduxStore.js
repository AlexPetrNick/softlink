import {applyMiddleware, combineReducers, createStore} from 'redux';
import pageNewsReducer from "./pageNewsReducer";
import userControlReducer from "./userControlReducer";
import newDetailReducer from "./newDetailReducer";
import cabinetReducer from "./cabinetReducer";
import hardPageReducer from "./hardPageReducer"
import thunkMiddleware from "redux-thunk"
import { authReducer } from './authReducer';
import appReducer from './appReducer'
import computerReducer from './computerReducer'

let reducers = combineReducers({
    pageNews: pageNewsReducer,
    pageUser: userControlReducer,
    pageNew: newDetailReducer, 
    pageCabinet: cabinetReducer,
    pageHard: hardPageReducer,
    auth: authReducer,
    app: appReducer,
    computer: computerReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));



export default store;