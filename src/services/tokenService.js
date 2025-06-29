// tokenService.js

const TOKEN_KEY = 'token';

// שמירת הטוקן
export function saveToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

// קבלת הטוקן
export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

// מחיקת הטוקן
export function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}

// בדיקה אם מחובר (אם יש טוקן)
export function isLoggedIn() {
    return !!getToken();
}

