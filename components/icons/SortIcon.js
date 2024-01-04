import * as React from "react"
import Svg, { Path } from "react-native-svg";

import { ICON_SIZE } from "../../utils/constants/styles/dimensions";

const SortIcon = (props) => (
  <Svg
    width={props?.size || ICON_SIZE}
    height={props?.size || ICON_SIZE}
    viewBox="0 0 32 32"
    fill="none"
  >
    <Path
      d="M2.25 2.5A.75.75 0 0 1 3 1.75h18a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.262.57l-6.738 5.775V14a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .262-.57l6.738-5.775V3.25H3.75v1.91l6.588 5.776c.16.14.252.34.256.552l.137 8.808 2.519-1.26V18a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-.415.67l-4 2a.75.75 0 0 1-1.085-.658L9.1 11.844l-6.593-5.78A.75.75 0 0 1 2.25 5.5v-3Z"
      stroke={props.color}
      strokeWidth={props?.stroke || 1}
    />
  </Svg>
)

export default SortIcon
