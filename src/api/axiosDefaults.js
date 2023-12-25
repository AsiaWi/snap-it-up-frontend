import axios from 'axios';


axios.defaults.baseURL = 'https://snap-it-up-25ef84f951df.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();