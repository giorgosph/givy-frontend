import { fetchAxios } from "./axios";

import { DEVNOT_EP } from "../constants/url";

const informAdmin = async (message, config) => {
  try {
    await fetchAxios('put', DEVNOT_EP, { message }, config);
  } catch (err) {
    alert("Notice Error!\nKindly Contact Support Team\nDev message: FE Error occured");
  }
};

export default informAdmin;