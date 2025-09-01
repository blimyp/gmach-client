import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { getOrdersDates } from "../../../services/orderService";
import PulseBox from "../../common/pulseBox";
import "./calender.css";

export default function OrdersDatesCalender() {
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const fetchDates = async () => {
            const uniqueDates = await getOrdersDates();
            setDates(uniqueDates);
        };
        fetchDates();
    }, []);

    // פונקציה לעיצוב תאריך בפורמט yyyy-mm-dd בלי בעיות Timezone
    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const dateStr = formatDate(date);
            if (dates.includes(dateStr)) {
                return 'date-taken';
            }
        }
        return null;
    };

    return (
        <div className="dates-container">
            <PulseBox>
                <p className="dates-title gradient-text">מהרו לתפוס תאריך</p>
            </PulseBox>
            <div className="calender-div">
                <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    tileClassName={tileClassName}
                />
            </div>
        </div>
    );
}
