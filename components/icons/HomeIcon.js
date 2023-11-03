import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SVGComponent = (props) => (
  <Svg
    width={33}
    height={32}
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M4 12.0001L16 2.66675L28 12.0001V26.6667C28 27.374 27.719 28.0523 27.219 28.5524C26.7189 29.0525 26.0406 29.3334 25.3333 29.3334H6.66667C5.95942 29.3334 5.28115 29.0525 4.78105 28.5524C4.28095 28.0523 4 27.374 4 26.6667V12.0001Z"
      stroke={props.color}
      strokeWidth={2.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 29.3335V16.0001H20V29.3335"
      stroke={props.color}
      strokeWidth={2.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SVGComponent;