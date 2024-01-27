const getQueryString = (url) => {
  const targetUrl = new URL(url);

  return Object.fromEntries(targetUrl.searchParams.entries());
};

export { getQueryString };
