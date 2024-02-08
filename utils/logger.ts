import informAdmin from "./APIs/informAdmin";
import { currentDate } from "./dataFormater";

const { date, time } = currentDate();

/* ------ Types ------ */
type PropsType = {
  type: "d" | "i" | "w" | "e" | "dn";
  message: string;
  token?: string;
  resetToken?: (token: string) => void;
} & (
  | {
      type: "dn";
      token: string;
      resetToken: (token: string) => void;
    }
  | {
      type: Exclude<"d" | "i" | "w" | "e", "dn">;
      token?: string;
      resetToken?: (token: string) => void;
    }
);

/* ------------------- */

const log = (props: PropsType) => {
  const { type, message, token, resetToken } = props;

  if (!__DEV__ && type !== "dn") return;

  switch (type) {
    case "d":
      console.log(`${date} | ${time} | DEBUG | ${message} \x1b[0m`);
      break;
    case "i":
      console.log(`\x1b[34m${date} | ${time} | INFO | ${message} \x1b[0m`);
      break;
    case "w":
      console.log(`\x1b[33m${date} | ${time} | WARNING | ${message} \x1b[0m`);
      break;
    case "e":
      console.log(`\x1b[31m${date} | ${time} | ERROR | ${message} \x1b[0m`);
      break;
    case "dn":
      const msg = `\x1b[35m${date} | ${time} | DEV NOTICE | ${message} \x1b[0m`;
      __DEV__ && console.log(msg);
      informAdmin({ message: msg, token: token, resetToken });
      break;
  }
};

export default log;
