import { useNavigate } from "react-router-dom";
import routes from '../../constants/routes';
// import CustomButton from "../common/button/button";
import LinkButton from '../common/linkButton/linkButton';
import './navButtons.css';

const NavButtons = () => {
    const navigate = useNavigate();

    // const handleClick = () => { };

    return (
        <nav className='navbar'>
            <div className='icon-div'><img src="/favicon.png" alt="icon" className="icon-image" /></div>
            <LinkButton onClick={() => navigate(routes.home)} text={'דף בית'} />
            <LinkButton onClick={() => navigate(routes.gallery)} text={'גלריה'} />
            <LinkButton onClick={() => navigate(routes.axisOrder)} text={'הזמנה קיימת'} />
            <LinkButton onClick={() => navigate(routes.orders)} text={'רשימת הזמנות'} />
            {/* <CustomButton text={'להתחברות'} onClick={handleClick} /> */}
        </nav>
    );
};

export default NavButtons;
