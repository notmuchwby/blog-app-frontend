import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL

export const signIn = async (username, password) => {
    const response = await axios.post(`${BASE_URL}/api/user/signin`, {username, password})
    return response.data;
}
