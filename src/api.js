import axios from 'axios';

const baseUrl = 'https://gmach.onrender.com/api';
// const baseUrl = 'http://http://localhost:5000/api';

export const createOrderRequest = (data) => axios.post(`${baseUrl}/orders/createOrder`, data);

export const getAllOrdersRequest = () => axios.get(`${baseUrl}/orders`);

export const deleteOrderRequest = (id) => axios.delete(`${baseUrl}/orders/${id}`);

export const getOrderByIdRequest = (id) => axios.get(`${baseUrl}/orders/${id}`);

export const loginRequest = async (email, password) => {
    const response = await axios.post(`${baseUrl}/users/login`, { email, password });
    return response;
};

export const registerRequest = async ({ name, email, password, phone }) => {
    const response = await axios.post(`${baseUrl}/users/createUser`, { name, email, password, phone });
    return response;
};

export const getAllUsersRequest = async () => {
    const response = await axios.get(`${baseUrl}/users`);
    return response.data;
};

export const getUserByIdRequest = async (id) => {
    const response = await axios.get(`${baseUrl}/users/${id}`);
    return response.data;
};

export const deleteUserRequest = async (id) => {
    const response = await axios.delete(`${baseUrl}/users/${id}`);
    return response.data;
};


