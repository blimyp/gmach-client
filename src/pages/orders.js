import React, { useEffect, useState } from "react";
import Spinner from "../components/common/spinner/spinner";
import Title from "../components/common/title/title";
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
            <Title text={'רשימת הזמנות'} />
            {loading && <Spinner />}
            {!loading && orders && (
                <div className="orders-list-container">
                    <ul className="orders-list">
                        {orders.map((order, index) => (
                            <li key={index} className="order-item">
                                <h3><p className="gold-text-gradient">מספר הזמנה: {order.orderId}</p></h3>
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
