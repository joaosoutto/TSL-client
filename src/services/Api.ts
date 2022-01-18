import axios from 'axios';
const API_BASE_URL = 'http://127.0.0.1:8000/';

type createUserPayload = {
  email: string;
  username: string;
  password: string;
};

type loginPayload = {
  username: string;
  password: string;
};

type editPayload = {
  title: string | undefined;
  body: string;
  id: string;
};

const token = localStorage.getItem('token');

const Api = {
  async getPosts() {
    const response = await axios.get(`${API_BASE_URL}posts/`);

    return response.data;
  },

  async getMyPosts() {
    const response = await axios.get(`${API_BASE_URL}posts/my-posts/`, {
      headers: { Authorization: `Token ${token}` },
    });

    return response.data;
  },

  async deletePost(id: string) {
    const response = await axios.delete(`${API_BASE_URL}posts/${id}/`, {
      headers: { Authorization: `Token ${token}` },
    });

    return response.data;
  },

  async editPost(payload: editPayload) {
    const response = await axios.put(
      `${API_BASE_URL}posts/${payload.id}/`,
      payload,
      {
        headers: { Authorization: `Token ${token}` },
      }
    );

    return response.data;
  },

  async createUser(payload: createUserPayload) {
    const response = await axios.post(`${API_BASE_URL}users/`, payload);
    return response;
  },

  async login(payload: loginPayload) {
    const response = await axios.post(
      `${API_BASE_URL}api-token-auth/`,
      payload
    );
    return response;
  },
};

export default Api;
