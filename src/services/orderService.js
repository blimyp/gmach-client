import { createOrderRequest } from '../api';

export const createOrder = async ({ orderData }) => {
    try {
        const response = await createOrderRequest(orderData);
        return response.data;
    } catch (err) {
        console.error('שגיאה ביצירת הזמנה:', err);
        throw err.response?.data || { message: 'שגיאה כללית ביצירת הזמנה' };
    }
};
