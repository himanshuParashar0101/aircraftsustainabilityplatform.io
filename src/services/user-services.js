import { axios1 } from "./helper";

export const signUp = (user) => {
    return axios1.post('server_url', user)
    .then((response) => response.data)
};

export const loginUser = (loginDetail) => {
    return axios1.post('api_url', loginDetail)
    .then((response) => response.data)
};