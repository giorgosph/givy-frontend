const includeByID = (draws, ids) => {
  if(draws && ids) {
    const filteredDraws = draws.filter(draw => ids.some(id => id === draw.id));
    return filteredDraws;
  } else return null;
};

const excludeByID = (draws, ids) => {
  if(draws && ids) {
    const filteredDraws = draws.filter(draw => !ids.some(id => id === draw.id));
    return filteredDraws;
  } else if(!draws) return null;
  else return draws;
};

export { 
  includeByID,
  excludeByID, 
}