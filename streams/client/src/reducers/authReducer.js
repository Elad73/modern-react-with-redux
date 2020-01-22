import DragonConsole from "../config/console";
import { SIGN_IN, SIGN_OUT} from "../actions/types";

const INITIAL_STATE = {
    isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
    DragonConsole.entering("authReducer");
    DragonConsole.inspect("state", state);
    DragonConsole.inspect("action", action);
    switch(action.type) {
        case SIGN_IN: 
            return { ...state, isSignedIn: true};
        case SIGN_OUT:
            return { ...state, isSignedIn: false};
        default:
            return state;
    }
};