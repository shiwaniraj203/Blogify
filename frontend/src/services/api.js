import axios from 'axios';

// Replace the API_URL with your backend URL
const API_URL = process.env.REACT_APP_API_URL || 'https://blogify-backend-1xt7.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (credentials) => api.post('/auth/login/', credentials),
  signup: (userData) => api.post('/auth/signup/', userData),
};

export const blogAPI = {
  getBlogs: (page = 1) => api.get(`/blogs/?page=${page}`),
  getBlog: (id) => api.get(`/blogs/${id}/`),
  createBlog: (blogData) => api.post('/blogs/', blogData),
  updateBlog: (id, blogData) => api.put(`/blogs/${id}/`, blogData),
  deleteBlog: (id) => api.delete(`/blogs/${id}/`),
};