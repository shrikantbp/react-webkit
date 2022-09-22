import axios from "axios";

// Axios Base URL
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

// Token Details
const tokenType = 'JWT '; // eg. JWT / Bearer etc

const getToken = () => {
    let userToken;
    try {
        const user = sessionStorage.getItem('loginUser');
        if (user) {
            let userData = JSON.parse(user);
            return userToken = userData.token; // Change the token object if need
        }
    } catch (error) {
        console.log('User token error: ', error);
    }
    return false;
}

const getDataSource = async (endpoint = '/', isToken = false) => {
    let authToken;
    if (isToken) {
        authToken = tokenType + getToken();
        return await axios.get(endpoint, {
            headers: {
                'Authorization': authToken,
            }
        })
    } else {
        return axios.get(endpoint);
    }
}

const postDataSource = async (endpoint = '/', data: any, isToken = false) => {
    let authToken;
    if (isToken) {
        authToken = tokenType + getToken();
        return await axios.post(endpoint, data, {
            headers: {
                'Authorization': authToken,
            }
        })
    } else {
        return axios.post(endpoint, data);
    }
}

const putDataSource = async (endpoint = '/', data: any, isToken = false) => {
    let authToken;
    if (isToken) {
        authToken = tokenType + getToken();
        return await axios.put(endpoint, data, {
            headers: {
                'Authorization': authToken,
            }
        })
    } else {
        return axios.put(endpoint, data);
    }
}

const patchDataSource = async (endpoint = '/', data: any, isToken = false) => {
    let authToken;
    if (isToken) {
        authToken = tokenType + getToken();
        return await axios.put(endpoint, data, {
            headers: {
                'Authorization': authToken,
            }
        })
    } else {
        return axios.put(endpoint, data);
    }
}

export {
    getToken,
    getDataSource,
    postDataSource,
    putDataSource,
    patchDataSource,
}