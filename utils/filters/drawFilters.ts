import { DrawType, ItemType } from "../types/objectTypes";

interface IID {
  id: number;
}

const includeByID = <T extends IID>(draws: T[], ids: number[]) => {
  if (draws.length && ids.length) {
    const filteredDraws = draws.filter((draw) =>
      ids.some((id) => id === draw.id)
    );

    return filteredDraws;
  } else return [];
};

const excludeByID = (draws: DrawType[], ids: number[]) => {
  if (draws && ids) {
    const filteredDraws = draws.filter(
      (draw) => !ids.some((id) => id === draw.id)
    );
    return filteredDraws;
  } else if (!draws) return [];
  else return draws;
};

const includeByDrawID = (items: ItemType[], ids: number[]) => {
  if (items.length && ids.length) {
    const filteredItems = items.filter((item) =>
      ids.some((id) => id === item.drawId)
    );
    return filteredItems;
  } else return [];
};

const getHighestPricedItem = (items: ItemType[]) => {
  if (!items || items.length === 0) return 0;
  else if (items.length === 1) return items[0];

  let highestPricedItem = items[0];

  for (let i = 1; i < items.length; i++) {
    if (items[i].price > highestPricedItem.price) {
      highestPricedItem = items[i];
    }
  }

  return highestPricedItem;
};

export { includeByID, excludeByID, includeByDrawID, getHighestPricedItem };
