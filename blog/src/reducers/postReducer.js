export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            //console.log("action.payload from reducer" + JSON.stringify(action.payload) + "/n/n/n/n");
            return action.payload;
        default:
            return state;
    }
};

