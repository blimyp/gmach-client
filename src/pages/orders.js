import React from "react";
import './orders.css'

const orders = [
    "הזמנה מס' 1",
    "הזמנה מס' 2",
    "הזמנה מס' 3",
    "הזמנה מס' 4",
    "הזמנה מס' 5",
    "הזמנה מס' 6",
    "הזמנה מס' 7",
    "הזמנה מס' 8",
    "הזמנה מס' 9",
    "הזמנה מס' 10",
];

export default function OrdersPage() {
    return (
        <div className="orders-container">
            <img src="/images/background.jpg" alt="backgrond"/>
            <h1 className="orders-title">רשימת הזמנות</h1>
            <ul className="orders-list">
                {orders.map((order, index) => (
                    <li key={index} className="order-item">
                        {order}
                    </li>
                ))}
            </ul>
        </div>
    );

}
