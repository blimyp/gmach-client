import React, { useState, useRef } from 'react';
import './newOrder.css';
import { createOrder } from '../../services/orderService';
import emailjs from "@emailjs/browser";
import Spinner from '../../components/common/spinner/spinner';

export default function NewOrder() {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
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
            const newOrder = await createOrder({ orderData: formData });
            setIsLoading(false);
            alert('ההזמנה נשלחה בהצלחה!');
            form.current.orderId.value = newOrder.orderId;
            emailjs.sendForm("service_knbxmbg", "template_b4ii71d", form.current, "a9upb4z0sKTekMhII");
            form.current.reset();
        } catch (err) {
            console.log(err);
            setIsLoading(false);
            alert('אירעה שגיאה בשליחת ההזמנה');
        }
    };

    return (
        <div className="order-page">
            <img src="/images/background.jpg" alt="background" className="background-img" />
            <form ref={form} className="order-form" onSubmit={handleSubmit}>
                <h2>טופס השלמת הזמנה</h2>
                <label>
                    תאריך הזמנה:
                    <input type="date" name="orderDate" value={formData.orderDate} onChange={handleChange} required />
                </label>

                <label>
                    תאור פריטים:
                    <input type="description" name="orderDescription" value={formData.orderDescription} onChange={handleChange} required />
                </label>

                <input type="hidden" name="orderId" />

                <button type="submit" disabled={isLoading}>
                    שליחה
                    {isLoading ? (<Spinner />) : ('')}
                </button>
            </form>
        </div>
    );

}
