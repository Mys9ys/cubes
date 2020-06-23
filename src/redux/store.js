import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import battleReducer from "./battle.reducer";

let reducers = combineReducers({
    battle:battleReducer
    // profilePage: profileReducer,
    // dialogsPage: dialogReducer,
    // usersPage: usersReducer,
    // auth: authReducer,
    // form: formReducer,
    // app: appReducer
});

// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
