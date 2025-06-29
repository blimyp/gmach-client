import { getUserByIdRequest, loginRequest, registerRequest } from '../api';
import { saveToken } from './tokenService';

export const register = async ({ email, password, phone, name }) => {
    try {
        const response = await registerRequest(email, password, phone, name);
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (err) {
        console.error('שגיאה בהרשמה', err);
        throw err.response?.data || { message: 'שגיאה בהרשמה' };
    }
};

export const login = async ({ email, password }) => {
    try {
        const response = await loginRequest(email, password);
        saveToken(response.data.token);
        return response.data;
    } catch (err) {
        console.error('שגיאה בכניסת משתמש', err);
        throw err.response?.data || { message: 'שגיאה בכניסת משתמש' };
    }
};

export const getUserById = async ({ id }) => {
    try {
        const response = await getUserByIdRequest(id);
        return response.data;
    } catch (err) {
        if (err.response.status === 404) {
            alert('לא נמצא משתמש עם מספר זה\nבדוק שוב את מספר משתמש שקיבלת.')
        } else {
            console.error('שגיאה בקבלת משתמש:', err);
            const errorToThrow = err ?? { message: 'שגיאה כללית בקבלת משתמש' };
            throw errorToThrow;
        }

    }
};

