const IP = "192.168.0.9"; 
const PORT = 3000;

export const BASE_URL = `http://${IP}:${PORT}/api/v1/`;

/* ----------------- Users ----------------- */

export const USERS_EP = `${BASE_URL}users/`;

export const LOGIN_EP = `${USERS_EP}login/`;
export const SIGNUP_EP = `${USERS_EP}register/`;

export const USER_DETAILS_EP = `${USERS_EP}details/`;
export const CONTACT_DETAILS_EP = `${USERS_EP}details/contact/`;
export const SHIPPING_DETAILS_EP = `${USERS_EP}details/shipping/`;

/* ----------------- Draws ----------------- */

export const DRAWS_EP = `${BASE_URL}draws/`;

export const OPT_IN_EP = `${DRAWS_EP}register/`;
export const DRAW_ITEMS_EP = `${DRAWS_EP}items/`;
