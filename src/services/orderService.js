import { createOrderRequest, getOrderByIdRequest } from '../api';

export const createOrder = async ({ orderData }) => {
    try {
        const response = await createOrderRequest(orderData);
        return response.data;
    } catch (err) {
        console.error('שגיאה ביצירת הזמנה:', err);
        throw err.response?.data || { message: 'שגיאה כללית ביצירת הזמנה' };
    }
};

export const getOrderById = async ({ orderId }) => {
    try {
        const response = await getOrderByIdRequest(orderId);
        return response.data;
    } catch (err) {
        if (err.response.status === 404) {
            alert('לא נמצאה הזמנה עם מספר זה\nבדוק שוב את מספר ההזמנה שקיבלת.')
        } else {
            console.error('שגיאה בקבלת הזמנה:', err);
            const errorToThrow = err ?? { message: 'שגיאה כללית ביצירת הזמנה' };
            throw errorToThrow;
        }

    }
};

