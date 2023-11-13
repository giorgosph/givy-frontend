import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SearchIcon = (props) => (
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
      d="M12.556 24.111c6.382 0 11.555-5.174 11.555-11.555C24.111 6.174 18.937 1 12.555 1 6.175 1 1 6.174 1 12.556 1 18.938 6.174 24.11 12.556 24.11ZM27 27l-6.283-6.283"
    />
  </Svg>
)
export default SearchIcon
