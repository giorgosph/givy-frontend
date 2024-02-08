import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconPropsType } from "./IconPropsType";
import { ICON_SIZE } from "../../utils/constants/styles/dimensions";

const FilterIcon = (props: IconPropsType) => (
  <Svg
    width={props?.size || ICON_SIZE}
    height={props?.size || ICON_SIZE}
    viewBox="0 0 32 32"
    fill="none"
  >
    <Path
      d="M4.273 21.273v-7.637M4.273 9.273V1.636M13 21.273v-9.818M13 7.09V1.637M21.727 21.273v-5.455M21.727 11.454V1.636M1 13.636h6.545M9.727 7.09h6.546M18.455 15.818H25"
      stroke={props.color}
      strokeWidth={props?.stroke || 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default FilterIcon