import axios from 'axios';
const Axios = axios.create();
const APITimeout = (process.env.NODE_ENV == 'production') ? 10000: 50000;
Axios.defaults.timeout = APITimeout;
export function getRequest(url,config={}){
    const agent = 'default';
    const defaultAxiosConfig = {
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        httpsAgent: agent,
    };
    const axiosConfig = {...defaultAxiosConfig, ...config};
    return Axios.get(url, axiosConfig).then(response => {
        return response;
    })
    .catch(error => {
        throw(error);
    });
};