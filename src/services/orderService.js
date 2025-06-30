import { createOrderRequest, getAllOrdersRequest } from '../api';

export const createOrder = async ({ orderData }) => {
    try {
        const response = await createOrderRequest(orderData);
        return response.data;
    } catch (err) {
        console.error('שגיאה ביצירת הזמנה:', err);
        throw err.response?.data || { message: 'שגיאה כללית ביצירת הזמנה' };
    }
};

export const getOrders = async () => {
    try {
        const response = await getAllOrdersRequest();
        return response.data;
    } catch (err) {
        console.error('שגיאה בקבלת הזמנות:', err);
        alert(err);
    }
};

