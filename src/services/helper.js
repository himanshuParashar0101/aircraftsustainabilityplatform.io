import axios from "axios";

export const Base_URL = 'http://localhost:';

export const axios1 = axios.create({
    baseURL : Base_URL
});