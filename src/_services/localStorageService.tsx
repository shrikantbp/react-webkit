export const getLocalStorage = async (endpoint = '/') => {
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

export const postLocalStorage = async (endpoint = '/', data: any) => {
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

export const putLocalStorage = async (endpoint = '/', data: any) => {
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