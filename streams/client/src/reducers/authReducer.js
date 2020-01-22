const INITIAL_STATE = {
    isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
    console.log("inside authReducer --------------------------------------->");
    console.log("state -------------------------------------------->" + JSON.stringify(state));
    console.log("action -------------------------------------------->" + JSON.stringify(action));
    switch(action.type) {
        case 'SIGN_IN': 
            return { ...state, isSignedIn: true};
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false};
        default:
            return state;
    }
};