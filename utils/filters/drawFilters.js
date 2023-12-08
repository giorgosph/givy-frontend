const includeByID = (draws, ids) => {
  if(draws.length && ids.length) {
    const filteredDraws = draws.filter(draw => ids.some(id => id === draw.id));
    return filteredDraws;
  } else return [];
};

const excludeByID = (draws, ids) => {
  if(draws && ids) {
    const filteredDraws = draws.filter(draw => !ids.some(id => id === draw.id));
    return filteredDraws;
  } else if(!draws) return [];
  else return draws;
};

const includeByDrawID = (items, ids) => {
  if(items.length && ids.length) {
    const filteredItems = items.filter(item => ids.some(id => id === item.drawId));
    return filteredItems;
  } else return [];
};

export { 
  includeByID,
  excludeByID, 
  includeByDrawID,
}