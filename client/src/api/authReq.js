import axios from 'axios';
import { queryClient } from '../config/queryClient';

const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';

export const checkAuthStatus = async () => {
    try
    {
        const res = await axios.get(`${baseUrl}/auth/authstatus`, { withCredentials: true });
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        if(res.status === 401) return { ...res.data, error: "Please login to view this page" };
        else // 500 or others
        {
            console.error(error.message);
            return { ...res.data, error: "Something went wrong" };
        }
    }
}

export const authLogin = async (creds) => {
    try
    {
        const res = await axios.post(`${baseUrl}/auth/login`, creds, { withCredentials: true });
        queryClient.invalidateQueries('authstatus');
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        if(res.status === 401) return { ...res.data, error: "Incorrect credentials" };
        else // 500 or others
        {
            console.error(error.message);
            return { ...res.data, error: "Something went wrong" };
        }
    }
}

export const authRegister = async (creds) => {
    try
    {
        const res = await axios.post(`${baseUrl}/auth/register`, creds, { withCredentials: true });
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        if(res.status === 400) return { error: res.message };
        else // 500 or others
        {
            console.error(error.message);
            return { ...res.data, error: "Something went wrong" };
        }
    }
}