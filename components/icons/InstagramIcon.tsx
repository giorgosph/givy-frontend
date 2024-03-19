import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconPropsType } from "./IconPropsType";
import { ICON_SIZE } from "../../utils/constants/styles/dimensions";

const InstagramIcon = (props: IconPropsType) => (
  <Svg
    width={props?.size || ICON_SIZE}
    height={props?.size || ICON_SIZE}
    viewBox="0 0 48 48"
    fill="none"
  >
    <Path
      fill={props.color}
      d="M24.002 0c-6.518 0-7.336.029-9.896.145-2.555.117-4.3.521-5.825 1.115-1.579.613-2.918 1.433-4.252 2.768-1.335 1.334-2.155 2.673-2.77 4.25-.595 1.527-1 3.271-1.115 5.825C.03 16.663 0 17.483 0 24c0 6.518.029 7.334.145 9.894.118 2.555.522 4.299 1.115 5.825.614 1.578 1.434 2.917 2.768 4.251 1.334 1.335 2.673 2.157 4.25 2.77 1.527.593 3.272.998 5.826 1.115 2.56.117 3.378.145 9.895.145 6.519 0 7.334-.029 9.894-.145 2.555-.117 4.301-.521 5.828-1.115 1.578-.613 2.915-1.435 4.249-2.77 1.335-1.334 2.155-2.673 2.77-4.251.59-1.526.995-3.271 1.115-5.825.115-2.56.145-3.376.145-9.894 0-6.518-.03-7.336-.145-9.896-.12-2.555-.525-4.299-1.115-5.825-.615-1.579-1.435-2.917-2.77-4.252S41.3 1.873 39.72 1.26C38.19.666 36.445.262 33.89.145 31.33.029 30.515 0 23.995 0h.007Zm-2.153 4.325h2.153c6.408 0 7.167.023 9.698.138 2.34.107 3.61.498 4.456.827 1.12.434 1.918.955 2.758 1.795.84.84 1.36 1.64 1.796 2.76.328.845.72 2.114.826 4.454.115 2.53.14 3.29.14 9.695s-.025 7.166-.14 9.696c-.107 2.34-.498 3.61-.826 4.455-.435 1.12-.956 1.917-1.796 2.756-.84.84-1.638 1.36-2.758 1.795-.845.33-2.116.72-4.456.828-2.53.114-3.29.14-9.698.14-6.409 0-7.168-.026-9.698-.14-2.34-.108-3.61-.5-4.457-.828-1.12-.435-1.92-.955-2.76-1.795-.84-.84-1.36-1.638-1.796-2.759-.328-.845-.72-2.114-.826-4.455-.115-2.53-.138-3.29-.138-9.698 0-6.41.023-7.166.138-9.696.107-2.34.498-3.61.826-4.455.435-1.12.956-1.92 1.796-2.76.84-.84 1.64-1.36 2.76-1.796.846-.33 2.117-.72 4.457-.828 2.214-.1 3.072-.13 7.545-.135v.006Z"
    />
    <Path
      fill={props.color}
      d="M36.761 8.251a2.88 2.88 0 1 0 0 5.76 2.88 2.88 0 0 0 0-5.76Z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M23.95 11.616c-6.806 0-12.325 5.518-12.325 12.325 0 6.806 5.519 12.323 12.325 12.323 6.807 0 12.324-5.517 12.324-12.323S30.757 11.616 23.95 11.616ZM24 31.875a7.875 7.875 0 1 0 0-15.75 7.875 7.875 0 0 0 0 15.75Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default InstagramIcon;
