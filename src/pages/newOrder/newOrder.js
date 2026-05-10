import React, { useState, useRef, useContext, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import './newOrder.css';
import { createOrder } from '../../services/orderService';
import emailjs from "@emailjs/browser";
import Spinner from '../../components/common/spinner/spinner';
import { AuthContext } from '../../contexts/authContext';
import routes from '../../constants/routes';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { StandsCategories } from "../../constants/standsCategories";

export default function NewOrder() {
    const navigate = useNavigate();
    const form = useRef();
    const { date } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        orderDate: '',
        orderDescription: '',
        orderCategory: '',
    });
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (date) {
            setFormData(prev => ({ ...prev, orderDate: date }));
        }
    }, [date]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
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
                navigate(routes.home);
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
                <TextField
                    id="outlined-basic"
                    label="תאריך הזמנה:"
                    variant="outlined"
                    onChange={handleChange}
                    value={formData.orderDate}
                    name={'orderDate'}
                    required
                    className='new_order_input'
                    type={'date'}
                    onInvalid={(e) => e.target.setCustomValidity("שדה חובה")}
                    onInput={(e) => e.target.setCustomValidity("")}
                />

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">קטגוריה</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formData.orderCategory}
                        name={'orderCategory'}
                        label="קטגוריה"
                        onChange={handleChange}
                    >
                        {Object.values(StandsCategories).map(
                            (category) => <MenuItem value={category.value}>{category.text}</MenuItem>
                        )}
                    </Select>
                </FormControl>

                <TextField
                    id="outlined-basic"
                    label="תאור פריטים:"
                    variant="outlined"
                    onChange={handleChange}
                    value={formData.orderDescription}
                    name={'orderDescription'}
                    required
                    className='new_order_input'
                    onInvalid={(e) => e.target.setCustomValidity("שדה חובה")}
                    onInput={(e) => e.target.setCustomValidity("")}
                />

                <button type="submit" disabled={isLoading}>
                    שליחה
                    {isLoading ? (<Spinner />) : ('')}
                </button>
            </form>
        </div>
    );
}
