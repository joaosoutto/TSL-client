import axios from 'axios';
const API_BASE_URL = 'http://127.0.0.1:8000/';

const Api = {
  async getPosts() {
    const response = await axios.get(`${API_BASE_URL}posts/`);

    return response.data;
  },
};

export default Api;
