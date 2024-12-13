import axios from 'axios';

const API_URL = 'https://leaderboard-proj.vercel.app/api';

export const getUsers = async () => {
  const res = await axios.get(`${API_URL}/users`);
  return res.data;
};

export const claimPoints = async (userId) => {
  const res = await axios.put(`${API_URL}/users/${userId}/claim`);
  return res.data;
};

export const addUser = async (name) => {
  const res = await axios.post(`${API_URL}/users`, { name });
  return res.data;
};
