const IP = "192.168.0.9"; 
const PORT = 3000;

export const BASE_URL = `http://${IP}:${PORT}/api/v1/`;
export const BASE_URL_WS = `ws://${IP}:${PORT}/ws`;

/* --------------------------- Users --------------------------- */
/* ------------------------------------------------------------- */

export const USERS_EP = `${BASE_URL}users/`;

export const LOGIN_EP = `${USERS_EP}login/`;
export const SIGNUP_EP = `${USERS_EP}register/`;
export const CONFIRM_EP = `${USERS_EP}confirm/`;

export const RP_EP = `${USERS_EP}reset-password/`;
export const FP_EP = `${USERS_EP}forgot-password/`;

/* ------- Notifications ------- */
const EMAIL_EP = `${USERS_EP}email/`;
const MOBILE_EP = `${USERS_EP}phone/`;

export const MOBILE_CODE_EP = `${MOBILE_EP}code/`;

export const EMAIL_FP_EP = `${EMAIL_EP}pass/`;
export const EMAIL_CODE_EP = `${EMAIL_EP}code/`;
export const CONTACT_US_EP = `${EMAIL_EP}contact/`;

export const FEEDBACK_EP = `${USERS_EP}feedback/`;

/* ------- Details ------- */
export const USER_DETAILS_EP = `${USERS_EP}details/`;

export const CONTACT_DETAILS_EP = `${USER_DETAILS_EP}contact/`;
export const SHIPPING_DETAILS_EP = `${USER_DETAILS_EP}shipping/`; 

/* --------------------------- Draws --------------------------- */
/* ------------------------------------------------------------- */

export const DRAWS_EP = `${BASE_URL}draws/`;

export const OPT_IN_EP = `${DRAWS_EP}register/`;
export const USER_DRAWS_EP = `${DRAWS_EP}user/`;
export const DRAW_ITEMS_EP = `${DRAWS_EP}items/`;

/* --------------------------- Admin --------------------------- */
/* ------------------------------------------------------------- */

export const DEVNOT_EP = `${BASE_URL}admin/fe/err`;
