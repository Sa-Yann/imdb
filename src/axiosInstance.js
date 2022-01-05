import axios from 'axios';

const instance = axios.create({
    // the instance allow us via the baseURL to appen the beguinning of the url request to all our future requests
    baseURL: "https://api.themoviedb.org/3",
})

export default instance;