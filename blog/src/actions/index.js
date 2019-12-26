import jsonPlaceHolder from '../apis/jsonplaceholder';

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const response = await jsonPlaceHolder.get('/posts');
        
        dispatch({ type: 'FETCH_POSTS', payload: response });
    };
};