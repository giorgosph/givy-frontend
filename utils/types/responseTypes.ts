import { ConfirmationValueType } from "../constants/data/confirmationTypes";
import {
  DrawType,
  ItemType,
  ShippingDetailsType,
  UserDetailsType,
} from "./objectTypes";

type ResponseSuccessType = {
  success?: true;
  message: "Success";
};

type ResponseNotAuthType = {
  success: false;
  body: never;
  message: "Wrong Credentials";
};

type ResponseInvalidDataType = {
  success: false;
  body: never;
  message: "Invalid Data";
};

/* ------------------- Draws ------------------- */
/* --------------------------------------------- */
export type UserDrawsResponseType = ResponseSuccessType & {
  body: {
    draws: { drawId: number }[];
    wins: ItemType[];
  };
};

export type DrawsResponseType = ResponseSuccessType & {
  body: DrawType[];
};

export type BestDrawResponseType = ResponseSuccessType & {
  body: {
    draw: DrawType;
    items: ItemType[];
  };
};

export type DrawItemsResponseType = ResponseSuccessType &
  (
    | {
        body: ItemType[];
      }
    | {
        body: {
          drawId: number;
        };
      }
  );

/* ------------------- Auth ------------------- */
/* -------------------------------------------- */
export type AuthResponseType =
  | {
      success: true;
      body: {
        user: UserDetailsType;
        confirmed: {
          email: boolean;
          mobile: boolean;
        };
        pass?: boolean;
      };
      token?: string;
      message: "Logged in successfully";
    }
  | {
      success: true;
      body: {
        user?: never;
        confirmed?: never;
        pass: boolean;
      };
      token?: string;
      message: "Success";
    }
  | {
      success: false;
      body?: never;
      token?: never;
      message: `${string} is already registered!` | "Wrong credentials!";
    };

export type ConfirmAccountResponseType =
  | ResponseNotAuthType
  | (ResponseSuccessType & {
      body: {
        confirm: ConfirmationValueType;
      };
    });

/* ------------------- Notification ------------------- */
/* ---------------------------------------------------- */

export type NotificationResponseType =
  | (ResponseSuccessType & {
      body: {
        type: "SMS" | "Email" | "Feedback";
      };
    })
  | {
      success: false;
      body: never;
      message: "Data Conflict" | "Wrong credentials!";
    };

/* ------------------- User ------------------- */
/* -------------------------------------------- */

export type UserDetailsResponseType =
  | (ResponseSuccessType &
      (
        | {
            body: {
              shippingDetails: ShippingDetailsType & {
                username: string;
              };
              contactDetails?: never;
            };
          }
        | {
            body: {
              shippingDetails?: never;
              contactDetails: {
                email?: string;
                mobile?: number;
              };
            };
          }
      ))
  | ResponseInvalidDataType;
