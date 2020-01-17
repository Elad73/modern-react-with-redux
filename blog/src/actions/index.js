import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonplaceholder';

export const fetchPostsAndUsers = (id) => async dispatch => {
    console.log('About to fetch posts')
    await dispatch(fetchPosts()); //to make sure we wait the request to be completed before we move forward
    console.log('fetched poasts!')
    //await dispatch(fetchUser(id));
};

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const response = await jsonPlaceHolder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    };
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });