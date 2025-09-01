import { createOrderRequest, getAllOrdersRequest, getOrdersDatesRequest } from '../api';

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

export const getOrdersDates = async () => {
    try {
        const response = await getOrdersDatesRequest();
        const dates = response.data;
        const uniqueDates = [...new Set(dates.map(date => date.split('T')[0]))];
        return uniqueDates;
    } catch (err) {
        console.error('שגיאה בקבלת תאריכי הזמנות:', err);
        alert(err);
    }
};


