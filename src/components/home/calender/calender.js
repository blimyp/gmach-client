import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { getOrdersDates } from "../../../services/orderService";
import "./calender.css";
import routes from "../../../constants/routes";
import Title from "../../common/title";

export default function OrdersDatesCalender() {
    const [dates, setDates] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDates = async () => {
            const uniqueDates = await getOrdersDates();
            setDates(uniqueDates);
        };
        fetchDates();
    }, []);

    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const tileClassName = ({ date, view }) => {
        if (view === 'month' && Array.isArray(dates)) {
            const dateStr = formatDate(date);
            return dates.includes(dateStr) ? 'date-taken' : null;
        }
        return null;
    };


    const handleDateChange = (date) => {
        const formatted = formatDate(date);
        navigate(`${routes.newOrder}/${formatted}`);

    };

    return (
        <div className="dates-container">
            <Title text={"מהרו לתפוס תאריך"} />
            <div className="calender-div">
                <Calendar
                    onChange={handleDateChange}
                    tileClassName={tileClassName}
                />
            </div>
        </div>
    );
}
