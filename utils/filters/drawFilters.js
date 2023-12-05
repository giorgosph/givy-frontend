const optedIn = (draws, userDraws) => {
  if(draws && userDraws) {
    const filteredDraws = draws.filter(draw => userDraws.some(id => id === draw.id));
    return filteredDraws;
  } else return null;
};

const notOptedIn = (draws, userDraws) => {
  if(draws && userDraws) {
    const filteredDraws = draws.filter(draw => !userDraws.some(id => id === draw.id));
    return filteredDraws;
  } else if(!draws) return null;
  else return draws;
};

export { 
  optedIn,
  notOptedIn, 
}