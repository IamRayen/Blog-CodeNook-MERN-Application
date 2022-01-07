import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { signupReducer } from "./Reducers/SignUpR";
import { loginReducer } from "./Reducers/LogInR";

const token = (state = {}, action) => {
    switch (action.type) {
        case "TOKEN":
            return { token: action.payload };
        default:
            return state;
    }
};

const reducer = combineReducers({
    signupReducer,
    loginReducer,
    token,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

if (localStorage.getItem("auth")) {
    store.dispatch({
        type: "TOKEN",
        payload: JSON.parse(localStorage.getItem("auth")),
    });
}

export default store;
