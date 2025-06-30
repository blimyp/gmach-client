import React, { useState, useRef, useContext } from 'react';
import './newOrder.css';
import { createOrder } from '../../services/orderService';
import emailjs from "@emailjs/browser";
import Spinner from '../../components/common/spinner/spinner';
import { AuthContext } from '../../contexts/authContext';

export default function NewOrder() {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        orderDate: '',
        orderDescription: '',
    });
    const { user } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const newOrder = await createOrder({ orderData: formData });
            if (newOrder) {
                setIsLoading(false);
                alert('ההזמנה נשלחה בהצלחה!');
                sendEmail(newOrder.orderId);
            }
        } catch (err) {
            console.log(err);
            setIsLoading(false);
            alert('אירעה שגיאה בשליחת ההזמנה');
        }
    };

    const sendEmail = (orderId) => {
        const templateParams = {
            orderId: orderId,
            customerMail: user.email,
            customerName: user.name,
        };
        emailjs.send("service_knbxmbg", "template_b4ii71d", templateParams, "a9upb4z0sKTekMhII")

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
                <button type="submit" disabled={isLoading}>
                    שליחה
                    {isLoading ? (<Spinner />) : ('')}
                </button>
            </form>
        </div>
    );

}
