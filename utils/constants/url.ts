const IP = "192.168.0.4";
// const IP = "192.168.0.7"; // ilias
const PORT = 3000;

export const BASE_URL = `http://${IP}:${PORT}/api/v1/`;
export const BASE_URL_WS = `ws://${IP}:${PORT}/ws/`;

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
export const PUSH_EP = `${BASE_URL}users/push/send/`;
export const PUSH_SIGN_TOKEN_EP = `${BASE_URL}users/push/register/`;

export const FEEDBACK_EP = `${BASE_URL}users/feedback/`;

export const MOBILE_CODE_EP = `${BASE_URL}users/phone/code/`;

export const EMAIL_FP_EP = `${BASE_URL}users/email/pass/`;
export const EMAIL_CODE_EP = `${BASE_URL}users/email/code/`;
export const CONTACT_US_EP = `${BASE_URL}users/email/contact/`;

/* ------- Details ------- */
export const CONTACT_DETAILS_EP = `${BASE_URL}users/details/contact/`;
export const SHIPPING_DETAILS_EP = `${BASE_URL}users/details/shipping/`;

/* ------- Winners ------- */
export const TOP_WINNERS_EP = `${BASE_URL}users/topWinners/`;

/* --------------------------- Draws --------------------------- */
/* ------------------------------------------------------------- */

export const DRAWS_EP = `${BASE_URL}draws/`;

export const BEST_DRAW_EP = `${DRAWS_EP}best/`;
export const OPT_IN_EP = `${DRAWS_EP}register/`;
export const USER_DRAWS_EP = `${DRAWS_EP}user/`;
export const DRAW_ITEMS_EP = `${DRAWS_EP}items/`;
export const FEATURED_DRAWS_EP = `${DRAWS_EP}featured/`;

/* --------------------------- Admin --------------------------- */
/* ------------------------------------------------------------- */

export const DEVNOT_EP = `${BASE_URL}admin/fe/err`;
