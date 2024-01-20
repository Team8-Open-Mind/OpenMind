const checkIncludesPercent = (positionOffset) => {
  if (typeof positionOffset === 'string') {
    return positionOffset.includes('%');
  }

  return null;
};

const getNullIfIncludePercent = (positionOffset) => {
  if (checkIncludesPercent(positionOffset)) return positionOffset;

  return null;
};

export { getNullIfIncludePercent };
