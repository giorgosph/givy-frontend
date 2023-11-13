import React from "react";
import Svg, { Path } from "react-native-svg";

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
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: [{ rotate: rotation }] }}
    >
      <Path
        d="M20.815 25.091l-9.333-9.333 9.333-9.334"
        stroke={props.color}
        strokeWidth={2.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowIcon;
