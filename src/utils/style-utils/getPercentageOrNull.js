const checkIncludesPercent = (positionOffset) => {
  if (typeof positionOffset === 'string') {
    return positionOffset.includes('%');
  }

  return null;
};

const getPercentageOrNull = (positionOffset) => {
  if (checkIncludesPercent(positionOffset)) return positionOffset;

  return null;
};

export { getPercentageOrNull };
