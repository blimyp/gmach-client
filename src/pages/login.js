import { useState } from 'react';
import './login.css';
import LinkButton from '../components/common/linkButton/linkButton';
import { login, register } from '../services/userService';

function LoginForm() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (email === '' || password === '' || (isSignUp && (name === '' || phone === ''))) {
            setError('נא למלא את כל השדות');
            return;
        }

        try {
            if (isSignUp) {
                await register({ name, phone, email, password });
                console.log('נרשמת בהצלחה');
            } else {
                await login({email, password});
                console.log('התחברת בהצלחה');
            }
        } catch (err) {
            setError('התרחשה שגיאה, בדוק את הפרטים ונסה שוב');
        }
    };

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                {isSignUp && (
                    <>
                        <input
                            type="text"
                            placeholder="שם מלא"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="tel"
                            placeholder="טלפון"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </>
                )}
                <input
                    type="email"
                    placeholder="אימייל"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="סיסמה"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type={"submit"} >{isSignUp ? 'הרשמה' : 'התחברות'}</button>
                {error && <p className="error-message">{error}</p>}
                <div className="register-prompt">
                    <span>{isSignUp ? 'כבר רשום?' : 'לא רשום עדיין?'}</span>
                    <LinkButton
                        onClick={() => setIsSignUp(!isSignUp)}
                        text={isSignUp ? 'להתחברות' : 'להרשמה'}
                        color={'black'}
                        fontSize={'0.8rem'}
                    />
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
