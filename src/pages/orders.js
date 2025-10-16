import React, { useEffect, useState } from "react";
import Spinner from "../components/common/spinner/spinner";
import YellowLine from "../components/common/yellowLine";
import { getOrders } from "../services/orderService";
import './orders.css'

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await getOrders();
                setOrders(response);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);


    return (
        <div className="orders-container">
            {/* <img src="/images/background.jpg" alt="backgrond" /> */}
            <div className="title-wrapper">
                <h1 className="orders-title">רשימת הזמנות</h1>
                <YellowLine />
            </div>
            {loading && <Spinner />}
            {!loading && orders && (
                <div className="orders-list-container">
                    <ul className="orders-list">
                        {orders.map((order, index) => (
                            <li key={index} className="order-item">
                                <h3>מספר הזמנה: {order.orderId}</h3>
                                <p><strong>תיאור:</strong> {order.orderDescription}</p>
                                <p><strong>תאריך:</strong> {new Date(order.orderDate).toLocaleDateString('he-IL')}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );

}
