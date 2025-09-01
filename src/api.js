import axiosInstance from "./services/axiosInstance";

export const createOrderRequest = (data) =>
    axiosInstance.post('/orders/createOrder', data);

export const getAllOrdersRequest = () =>
    axiosInstance.get('/orders');

export const getOrdersDatesRequest = () =>
    axiosInstance.get('/orders/getOrdersDates');

export const deleteOrderRequest = (id) =>
    axiosInstance.delete(`/orders/${id}`);

export const loginRequest = async (email, password) => {
    const response = await axiosInstance.post('/users/login', { email, password });
    return response;
};

export const registerRequest = async (email, password, phone, name) => {
    const response = await axiosInstance.post('/users/createUser', { name, email, password, phone });
    return response;
};

export const getAllUsersRequest = async () => {
    const response = await axiosInstance.get('/users');
    return response.data;
};

export const getUserByIdRequest = async (id) => {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
};

export const deleteUserRequest = async (id) => {
    const response = await axiosInstance.delete(`/users/${id}`);
    return response.data;
};
