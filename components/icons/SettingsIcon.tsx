import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconPropsType } from "./IconPropsType";
import { ICON_SIZE } from "../../utils/constants/styles/dimensions";

function SettingIcon(props: IconPropsType) {
  return (
    <Svg
      width={props?.size || ICON_SIZE}
      height={props?.size || ICON_SIZE}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Path
        d="M16 9.588a6.35 6.35 0 012.494.503c.762.322 1.45.784 2.037 1.375a6.48 6.48 0 011.375 2.037 6.36 6.36 0 01.503 2.494 6.35 6.35 0 01-.503 2.494 6.443 6.443 0 01-3.412 3.412 6.362 6.362 0 01-2.494.503 6.351 6.351 0 01-2.494-.503 6.443 6.443 0 01-3.412-3.412 6.362 6.362 0 01-.503-2.494c0-.866.168-1.706.503-2.494a6.342 6.342 0 011.375-2.037 6.478 6.478 0 012.037-1.375A6.407 6.407 0 0116 9.588zm0-.688a7.098 7.098 0 00-7.097 7.097A7.098 7.098 0 1023.097 16 7.1 7.1 0 0016 8.9z"
        stroke={props.color}
        strokeWidth={props?.stroke || 0.75}
      />
      <Path
        d="M16 19.334a3.34 3.34 0 01-3.338-3.337A3.34 3.34 0 0116 12.659a3.34 3.34 0 013.337 3.338A3.34 3.34 0 0116 19.334zm0-6.046A2.714 2.714 0 0013.287 16 2.714 2.714 0 0016 18.712 2.714 2.714 0 0018.712 16 2.714 2.714 0 0016 13.287z"
        stroke={props.color}
        strokeWidth={props?.stroke || 0.75}
      />
      <Path
        d="M17.006 3.353l1.066 2.885.231.621.631.207c.322.106 1.003.403 1.357.565l.584.269.581-.278 2.747-1.306 1.45 1.453-1.287 2.793-.279.604.3.593c.213.42.394.86.544 1.31l.21.64.634.225 2.866 1.02v2.052l-2.885 1.066-.622.231-.206.631c-.147.45-.331.888-.544 1.31l-.306.603.29.61 1.307 2.746-1.453 1.453-2.785-1.29-.603-.279-.593.3c-.42.213-.86.394-1.31.544l-.64.21-.225.634-1.02 2.866h-2.052l-1.066-2.885-.231-.622-.631-.206c-.322-.106-1.004-.403-1.357-.566l-.584-.268-.581.278-2.747 1.306-1.45-1.453 1.287-2.79.279-.604-.3-.593a9.622 9.622 0 01-.544-1.31l-.21-.64-.634-.226-2.866-1.018V14.99l2.885-1.066.622-.231.206-.632c.106-.321.403-1.003.566-1.356l.268-.584-.278-.581-1.306-2.747 1.45-1.45 2.79 1.287.604.278.593-.3c.42-.212.86-.393 1.31-.543l.64-.21.225-.634 1.02-2.866h2.052m.96-1.378H13.98L12.637 5.76c-.518.172-1.021.379-1.503.622L7.472 4.694 4.656 7.509l1.725 3.625s-.453.982-.622 1.503l-3.78 1.397v3.982l3.78 1.343c.172.52.379 1.02.622 1.5l-1.687 3.663 2.815 2.816 3.625-1.726s.982.454 1.503.622l1.397 3.782h3.982l1.343-3.782a10.9 10.9 0 001.5-.622l3.663 1.688 2.816-2.816-1.726-3.625c.244-.48.454-.98.622-1.5l3.782-1.397v-3.98l-3.782-1.345a10.9 10.9 0 00-.622-1.5L27.3 7.475l-2.816-2.816-3.622 1.725s-.984-.453-1.503-.621l-1.393-3.785z"
        stroke={props.color}
        strokeWidth={props?.stroke || 0.75}
      />
    </Svg>
  )
}

export default SettingIcon