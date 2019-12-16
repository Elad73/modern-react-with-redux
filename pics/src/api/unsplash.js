import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f7b7460c741b55edc2d0eb7162079c6f959906d025969c049192f79cc8f14be8'
    }
});