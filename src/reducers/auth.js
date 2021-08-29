import {LOG_IN, LOG_OUT} from "../actions";

const initialState = {
    isLoggedIn: !!localStorage.getItem("isLoggedIn") || false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case LOG_IN: {
            localStorage.setItem("isLoggedIn", true);
            return {isLoggedIn: true}
        }
        case LOG_OUT: {
            localStorage.removeItem("isLoggedIn");
            return {isLoggedIn: false}
        }
        default: return state;
    }
}