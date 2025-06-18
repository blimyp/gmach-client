import React, { useState } from 'react';
import './orderForm.css';
import { createOrder } from '../../services/orderService';

export default function OrderForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        customerName: '',
        customerPhone: '',
        customerMail: '',
        orderDate: '',
        orderDescription: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await createOrder({ orderData: formData });
            alert('ההזמנה נשלחה בהצלחה!');
        } catch (err) {
            console.log(err);
            alert('אירעה שגיאה בשליחת ההזמנה');
        }
        setIsLoading(false);
    };

    return (
        <form className="order-form" onSubmit={handleSubmit}>
            <h2>טופס השלמת הזמנה</h2>

            <label>
                שם לקוח:
                <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} required />
            </label>

            <label>
                טלפון לקוח:
                <input type="tel" name="customerPhone" value={formData.customerPhone} onChange={handleChange} required />
            </label>

            <label>
                מייל:
                <input type="mail" name="customerMail" value={formData.customerMail} onChange={handleChange} required />
            </label>

            <label>
                תאריך הזמנה:
                <input type="date" name="orderDate" value={formData.orderDate} onChange={handleChange} required />
            </label>

            <label>
                תאור פריטים:
                <input type="description" name="orderDescription" value={formData.orderDescription} onChange={handleChange} required />
            </label>

            <button type="submit" disabled={isLoading}>
                שליחה
                {isLoading ? (<span className="spinner"></span>) : ('')}
            </button>
        </form>
    );
}
