export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        deafult:
            return state;
    }
};

