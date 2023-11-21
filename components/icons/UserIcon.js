import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { ICON_SIZE } from "../../utils/constants/styles/dimensions";

const UserIcon = (props) => (
  <Svg
    width={props?.size || ICON_SIZE}
    height={props?.size || ICON_SIZE}
    viewBox="0 0 32 32"
    fill="none"
  >
    <Path
      d="M26.6666 28V25.3333C26.6666 23.9188 26.1047 22.5623 25.1045 21.5621C24.1043 20.5619 22.7477 20 21.3333 20H10.6666C9.2521 20 7.89554 20.5619 6.89535 21.5621C5.89515 22.5623 5.33325 23.9188 5.33325 25.3333V28"
      stroke={props.color}
      strokeWidth={props?.stroke || 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.0001 14.6667C18.9456 14.6667 21.3334 12.2789 21.3334 9.33333C21.3334 6.38781 18.9456 4 16.0001 4C13.0546 4 10.6667 6.38781 10.6667 9.33333C10.6667 12.2789 13.0546 14.6667 16.0001 14.6667Z"
      stroke={props.color}
      strokeWidth={props?.stroke || 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default UserIcon;