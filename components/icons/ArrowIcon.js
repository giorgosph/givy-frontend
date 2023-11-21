import React from "react";
import Svg, { Path } from "react-native-svg";

import { ICON_SIZE } from "../../utils/constants/styles/dimensions";

function ArrowIcon(props) {
  let rotation = '0deg';

  switch (props?.direction) {
    case 'U':
      rotation = '90deg';
      break;
    case 'F':
      rotation = '180deg';
      break;
    case 'D':
      rotation = '-90deg';
      break;
  }

  return (
    <Svg
      width={props?.size || ICON_SIZE}
      height={props?.size || ICON_SIZE}
      viewBox="0 0 32 32"
      fill="none"
      style={{ transform: [{ rotate: rotation }] }}
    >
      <Path
        d="M20.815 25.091l-9.333-9.333 9.333-9.334"
        stroke={props.color}
        strokeWidth={props?.stroke || 1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowIcon;
