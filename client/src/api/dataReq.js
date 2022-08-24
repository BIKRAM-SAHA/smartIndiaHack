import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

export const getData = async () => {
  try {
    const res = await axios.get(`${baseUrl}/auth/authstatus`, {
      withCredentials: true,
    });
    if (res.data.isLoggedIn) {
      const uniqId = res.data.user._doc._id;
      const res2 = await axios.get(
        `${baseUrl}/test/get`,
        {
          studentId: uniqId,
        },
        { withCredentials: true }
      );
      return res2.data;
    } else return { ...res.data, error: "Please login to view this page" };
  } catch (error) {
    const res = error.response;
    if (res.status === 401)
      return { ...res.data, error: "Please login to view this page" };
    // 500 or others
    else {
      console.error(error.message);
      return { ...res.data, error: "Something went wrong" };
    }
  }
};
