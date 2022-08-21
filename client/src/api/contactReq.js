import axios from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';

export const sendContactMessage = async (data) => {
    try
    {
        const res = await axios.post(`${baseUrl}/contact`, data);
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        console.error(error.message);
        return { ...res.data, error: "Something went wrong. Please try again." };
    }
}