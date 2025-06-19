import React, { useState } from "react";
import CustomButton from "../components/common/button/button";
import { getOrderById } from "../services/orderService";
import "./axisOrder.css";

export default function AxisOrder() {
    const [orderNumber, setOrderNumber] = useState("");
    const [order, setOrder] = useState({});

    const handleSearch = async () => {
        if (orderNumber != null && orderNumber.trim() !== "") {
            const orderById = await getOrderById({ orderId: Number(orderNumber) });
            if (orderById) {
                setOrder(orderById);
            }
        }
    };

    return (
        <>
            <div className="background-div"></div>
            <div className="axis-order-container">
                <div className="axis-order-form">
                    <input
                        type="text"
                        placeholder="מספר הזמנה"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                        className="axis-order-input"
                    />
                    <CustomButton onClick={handleSearch} text={'חפש'} />
                </div>
                <div className="order-container">
                    <h2 className="order-title">פרטי ההזמנה</h2>
                    <ul className="order-details">
                        <li><strong>שם לקוח:</strong> {order ? order.customerName : ''}</li>
                        <li><strong>אימייל:</strong> {order ? order.customerMail : ''}</li>
                        <li><strong>טלפון:</strong> {order ? order.customerPhone : ''}</li>
                        <li><strong>תאריך הזמנה:</strong> {order ? new Date(order.orderDate).toLocaleDateString('he-IL') : ''}</li>
                        <li><strong>תיאור:</strong> {order ? order.orderDescription : ''}</li>
                        <li><strong>מספר הזמנה:</strong> {order ? order.orderId : ''}</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
