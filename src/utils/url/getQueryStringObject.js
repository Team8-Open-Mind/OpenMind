const getQueryStringObject = (url) => {
  const targetUrl = new URL(url);

  return Object.fromEntries(targetUrl.searchParams.entries());
};

export { getQueryStringObject };
