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

    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef();

    const handleNavigate = (route) => {
        navigate(route);
        setIsOpen(false);
    };

    // סגירה בלחיצה מחוץ ל-dialog
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dialogRef.current && !dialogRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <button className="hamburger" onClick={() => setIsOpen(true)}>
                ☰
            </button>


            <div
                className={`mobile-dialog ${isOpen ? 'open' : ''}`}
                ref={dialogRef}
            >
                <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
                <div className="mobile-menu-content">
                    {token && <UserNameButton isMobile={true} />}
                    <LinkButton onClick={() => handleNavigate(routes.home)} text={'דף בית'} />
                    <LinkButton onClick={() => handleNavigate(routes.gallery)} text={'גלריה'} />
                    <LinkButton onClick={() => handleNavigate(token ? routes.newOrder : routes.login)} text={'הזמנה חדשה'} />
                    {token && <LinkButton onClick={() => handleNavigate(routes.orders)} text={'רשימת הזמנות'} />}
                    {!token && <CustomButton text={'התחברות'} onClick={() => handleNavigate(routes.login)} />}
                </div>
            </div>

        </>
    );
};

function UserNameButton({ isMobile = false }) {
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

    if (isMobile) {
        return (
            <LinkButton onClick={() => logoutContext()} text={`התנתק (${name})`} />
        );
    }

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <LinkButton onClick={() => setOpen(!open)} text={name} />
            {open && (
                <div
                    ref={popoverRef}
                    style={{
                        position: 'absolute',
                        right: 0,
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
