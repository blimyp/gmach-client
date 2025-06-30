import React, { useEffect, useState } from "react";
import Spinner from "../components/common/spinner/spinner";
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
            <img src="/images/background.jpg" alt="backgrond" />
            <h1 className="orders-title">רשימת הזמנות</h1>
            {loading && <Spinner />}
            {!loading && orders && (
                <ul className="orders-list">
                    {orders.map((order, index) => (
                        <li key={index} className="order-item">
                            <p><strong>מספר הזמנה:</strong> {order.orderId}</p>
                            <p><strong>תיאור:</strong> {order.orderDescription}</p>
                            <p><strong>תאריך:</strong> {new Date(order.orderDate).toLocaleDateString('he-IL')}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

}
