import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconPropsType } from "./IconPropsType";
import { ICON_SIZE } from "../../utils/constants/styles/dimensions";

const LinkedInIcon = (props: IconPropsType) => (
  <Svg
    width={props?.size || ICON_SIZE}
    height={props?.size || ICON_SIZE}
    viewBox="0 0 48 48"
    fill="none"
  >
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.987 0C3.576 0 0 3.582 0 8v32c0 4.418 3.576 8 7.987 8h31.026C43.424 48 47 44.418 47 40V8c0-4.418-3.576-8-7.987-8H7.987ZM6.45 10.738c0 2.413 1.827 4.177 4.08 4.177 2.254 0 4.081-1.764 4.081-4.177 0-2.413-1.827-4.18-4.08-4.18-2.254 0-4.08 1.767-4.08 4.18Zm26.634 30.514h7.077V26.955c0-7.06-4.267-9.47-8.216-9.47-3.652 0-6.133 2.43-6.818 3.854v-3.203h-6.806v23.116h7.077V28.72c0-3.342 2.059-4.967 4.159-4.967 1.986 0 3.527 1.15 3.527 4.874v12.626ZM14.069 18.118v23.117H6.992V18.118h7.077Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default LinkedInIcon;
