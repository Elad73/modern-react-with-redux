import jsonPlaceHolder from '../apis/jsonplaceholder';

export const fetchPosts = async () => {
    const response = await jsonPlaceHolder.get('/posts');
    return {
        type: 'FETCH_POST',
        payload: response
    };
};