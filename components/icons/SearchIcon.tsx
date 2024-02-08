import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconPropsType } from "./IconPropsType";
import { ICON_SIZE } from "../../utils/constants/styles/dimensions";

const SearchIcon = (props: IconPropsType) => (
  <Svg
    width={props?.size || ICON_SIZE}
    height={props?.size || ICON_SIZE}
    viewBox="0 0 32 32"
    fill="none"
  >
    <Path
      stroke={props.color}
      strokeWidth={props?.stroke || 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.556 24.111c6.382 0 11.555-5.174 11.555-11.555C24.111 6.174 18.937 1 12.555 1 6.175 1 1 6.174 1 12.556 1 18.938 6.174 24.11 12.556 24.11ZM27 27l-6.283-6.283"
    />
  </Svg>
)
export default SearchIcon
