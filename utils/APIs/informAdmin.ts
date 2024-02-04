import { fetchAxios } from "./axios";

import { DEVNOT_EP } from "../constants/url";

/* ------ Types ------ */
type PropsType = {
  message: string;
  token: string; // TODO: specify
  resetToken: () => void;
};

/* ------------------- */

const informAdmin = async (props: PropsType) => {
  const { message, token, resetToken } = props;

  try {
    await fetchAxios({
      type: "put",
      endpoint: DEVNOT_EP,
      body: { message },
      token,
      resetToken,
    });
  } catch (err) {
    alert(
      "Notice Error!\nKindly Contact Support Team\nDev message: FE Error occured"
    );
  }
};

export default informAdmin;
