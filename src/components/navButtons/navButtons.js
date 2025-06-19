import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router-dom";
import routes from '../../constants/routes';
import './navButtons.css';

const NavButtons = () => {
    const navigate = useNavigate();

    return (
        <nav className='navbar'>
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button onClick={() => navigate(routes.orders)}>רשימת הזמנות</Button>
                <Button onClick={() => navigate(routes.axisOrder)}>הזמנה קיימת</Button>
                <Button onClick={() => navigate(routes.gallery)}>גלריה</Button>
                <Button onClick={() => navigate(routes.home)}>עמוד ראשי</Button>
            </ButtonGroup>
        </nav>
    );
};

export default NavButtons;
