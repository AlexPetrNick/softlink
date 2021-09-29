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

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>
/*@ts-ignore*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;