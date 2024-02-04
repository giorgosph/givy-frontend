import { ItemType, UserDetailsType } from "./objectTypes";

type ResponseBaseType = {
  success: boolean;
  message: string;
};

export type UserDrawsResponseType = ResponseBaseType & {
  body: {
    draws: number[];
    wins: ItemType[];
  };
};

export type AuthResponseType =
  | (ResponseBaseType & {
      body: {
        user: UserDetailsType;
        type?: "username" | "email";
        confirmed: {
          email: boolean;
          mobile: boolean;
        };
        pass?: never;
      };
      token: string;
    })
  | (ResponseBaseType & {
      body: {
        pass: boolean;
        user?: never;
        type?: never;
        confirmed?: never;
      };
      token?: never;
    });
