import axios from 'axios';
const API_BASE_URL = 'http://127.0.0.1:8000/';

type createUserPayload = {
  email: string;
  username: string;
  password: string;
};

const Api = {
  async getPosts() {
    const response = await axios.get(`${API_BASE_URL}posts/`);

    return response.data;
  },

  async createUser(payload: createUserPayload) {
    const response = await axios.post(`${API_BASE_URL}users/`, payload);
    console.log(response);
    return response;
  },
};

export default Api;
