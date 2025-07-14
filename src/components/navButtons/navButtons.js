import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from '../../constants/routes';
import { AuthContext } from "../../contexts/authContext";
import CustomButton from "../common/button/button";
import LinkButton from '../common/linkButton/linkButton';
import './navButtons.css';

const NavButtons = () => {
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);

    return (
        <nav className='navbar'>
            {token && <UserNameButton />}
            <div className='icon-div'><img src="/favicon.png" alt="icon" className="icon-image" /></div>
            <LinkButton onClick={() => navigate(routes.home)} text={'דף בית'} />
            <LinkButton onClick={() => navigate(routes.gallery)} text={'גלריה'} />
            {/* <LinkButton onClick={() => navigate(routes.axisOrder)} text={'הזמנה קיימת'} /> */}
            <LinkButton onClick={() => navigate(token ? routes.newOrder : routes.login)} text={'הזמנה חדשה'} />
            {token && <LinkButton onClick={() => navigate(routes.orders)} text={'רשימת הזמנות'} />}
            {!token && <div className="login-button-div"><CustomButton text={'התחברות'} onClick={() => navigate(routes.login)} /></div>}
        </nav>
    );
};

function UserNameButton() {
    const [open, setOpen] = useState(false);
    const popoverRef = useRef();
    const { logoutContext, user } = useContext(AuthContext);
    const { name } = user;


    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popoverRef.current && !popoverRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <LinkButton onClick={() => setOpen(!open)} text={name} />

            {open && (
                <div
                    ref={popoverRef}
                    style={{
                        position: 'absolute',
                        right: 0,
                        margin: 'auto',
                        background: 'white',
                        border: '1px solid #ccc',
                        padding: '10px',
                        zIndex: 999,
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                        borderRadius: '8px',
                    }}
                >
                    <LinkButton onClick={() => logoutContext()} text={'התנתק'} color={'black'} />
                </div>
            )}
        </div>
    );
}

export default NavButtons;
