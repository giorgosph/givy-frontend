const IP = "192.168.0.9"; 
const PORT = 3000;

export const BASE_URL = `http://${IP}:${PORT}/api/v1`;

export const LOGIN_EP = `${BASE_URL}/users/login/`;
export const SIGNUP_EP = `${BASE_URL}/users/register/`;