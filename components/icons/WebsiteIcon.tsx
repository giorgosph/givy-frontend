import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

import { IconPropsType } from "./IconPropsType";
import { ICON_SIZE } from "../../utils/constants/styles/dimensions";

const WebsiteIcon = (props: IconPropsType) => (
  <Svg
    width={props?.size || ICON_SIZE}
    height={props?.size || ICON_SIZE}
    viewBox="0 0 8 7"
    fill="none"
  >
    <G clipPath="url(#a)">
      <Path
        fill={props.color}
        d="m4.416 4.792 1.277-1.277-1.277-1.278.388-.388L6.47 3.515 4.804 5.18l-.388-.39Zm-1.444 0L1.694 3.515l1.278-1.278-.389-.388L.917 3.515 2.583 5.18l.389-.39Z"
      />
    </G>
  </Svg>
);

export default WebsiteIcon;
