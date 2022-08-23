import axios from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';

export const sendCocurrData = async (data) => {
    try
    {
        const res = await axios.post(`${baseUrl}/cocurr/create`, data, { withCredentials: true });
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        console.error(error.message);
        return { ...res.data, error: "Something went wrong. Please try again." };
    }
}

export const getCocurrData = async (studentId) => {
    try
    {
        // console.log("In getCocurr");
        // console.log(studentId);
        const body = { studentId: studentId }
        const res = await axios.post(`${baseUrl}/cocurr/get`, body, { withCredentials: true });
        // console.log(res.data);
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        console.error(error.message);
        return { ...res.data, error: "Something went wrong. Please try again." };
    }
}

export const deleteCocurr = async (data) => {
    try
    {
        const res = await axios.delete(`${baseUrl}/cocurr/delete`, { data: data, withCredentials: true });
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        console.error(error.message);
        return { ...res.data, error: "Something went wrong. Please try again." };
    }
}