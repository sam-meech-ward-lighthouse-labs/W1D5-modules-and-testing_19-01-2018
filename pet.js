function isGoldpet(name) {
  return name === 'goldfish';
}
exports.isGoldpet = isGoldpet;

function   fishName   (name) {
  if (name === undefined) {
    return '😢';
  }
  if (name === '') {
    return '🙅‍';
  }
  return name + " 🐟";
}
exports.fishName = fishName;
