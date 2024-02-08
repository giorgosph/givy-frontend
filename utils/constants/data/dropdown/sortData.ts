import { DropdownItemType } from "../../../../components/general/CustomDropdown";

export type SortDataValueType =
  | "default"
  | "openingDay"
  | "closingDay"
  | "raffleValue";

export const sortData: DropdownItemType[] = [
  { value: "default", label: "Default" },
  { value: "openingDay", label: "Opening Day" },
  { value: "closingDay", label: "Closing Day" },
  { value: "raffleValue", label: "Raffle Total Price" },
];
