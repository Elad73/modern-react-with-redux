export default (state = null, action) => {
    switch(action.type) {
        case 'USER_POSTS':
            return action.payload;
        default:
            return state;
    }
};

