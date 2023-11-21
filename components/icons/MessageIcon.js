import * as React from "react"
import Svg, { Path } from "react-native-svg"

import { ICON_SIZE } from "../../utils/constants/styles/dimensions"

const MessageIcon = (props) => (
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
      d="M26 17.667a2.778 2.778 0 0 1-2.778 2.777H6.556L1 26V3.778A2.778 2.778 0 0 1 3.778 1h19.444A2.778 2.778 0 0 1 26 3.778v13.889Z"
    />
  </Svg>
)
export default MessageIcon
