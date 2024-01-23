const IP = "192.168.0.9"; 
const PORT = 3000;

export const BASE_URL = `http://${IP}:${PORT}/api/v1/`;
export const BASE_URL_WS = `ws://${IP}:${PORT}/ws`;

/* --------------------------- Users --------------------------- */
/* ------------------------------------------------------------- */

/* ------- AUTH ------- */
export const LOGIN_EP = `${BASE_URL}users/login/`;
export const LOGOUT_EP = `${BASE_URL}users/logout/`;
export const SIGNUP_EP = `${BASE_URL}users/register/`;
export const CONFIRM_EP = `${BASE_URL}users/confirm/`;

export const RP_EP = `${BASE_URL}users/reset-password/`;
export const FP_EP = `${BASE_URL}users/forgot-password/`;

export const REFRESH_TOKEN_EP = `${BASE_URL}users/refresh-token/`;

/* ------- Notifications ------- */
export const MOBILE_CODE_EP = `${BASE_URL}users/phone/code/`;

export const EMAIL_FP_EP = `${BASE_URL}users/email/pass/`;
export const EMAIL_CODE_EP = `${BASE_URL}users/email/code/`;
export const CONTACT_US_EP = `${BASE_URL}users/email/contact/`;

export const FEEDBACK_EP = `${BASE_URL}users/feedback/`;

/* ------- Details ------- */
export const CONTACT_DETAILS_EP = `${BASE_URL}users/details/contact/`;
export const SHIPPING_DETAILS_EP = `${BASE_URL}users/details/shipping/`; 

/* --------------------------- Draws --------------------------- */
/* ------------------------------------------------------------- */

export const DRAWS_EP = `${BASE_URL}draws/`;

export const OPT_IN_EP = `${DRAWS_EP}register/`;
export const USER_DRAWS_EP = `${DRAWS_EP}user/`;
export const DRAW_ITEMS_EP = `${DRAWS_EP}items/`;

/* --------------------------- Admin --------------------------- */
/* ------------------------------------------------------------- */

export const DEVNOT_EP = `${BASE_URL}admin/fe/err`;
