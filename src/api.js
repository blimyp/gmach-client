import axios from 'axios';

const baseUrl = 'https://gmach.onrender.com/api';

export const createOrderRequest = (data) => axios.post(`${baseUrl}/orders/createOrder`, data);

export const getAllOrdersRequest = () => axios.get(`${baseUrl}/orders`);

export const deleteOrderRequest = (id) => axios.delete(`${baseUrl}/${id}`);

export const getOrderByIdRequest = (id) => axios.get(`${baseUrl}/orders/${id}`);
