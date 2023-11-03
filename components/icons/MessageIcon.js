import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      stroke={props.color}
      strokeWidth={2.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M26 17.667a2.778 2.778 0 0 1-2.778 2.777H6.556L1 26V3.778A2.778 2.778 0 0 1 3.778 1h19.444A2.778 2.778 0 0 1 26 3.778v13.889Z"
    />
  </Svg>
)
export default SvgComponent
