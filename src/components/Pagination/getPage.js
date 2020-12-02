const DEFAULT_PAGE = 1;

const getPage = () => {
  const page =
    +new URLSearchParams(window.location.search).get("page") || DEFAULT_PAGE;
  return page;
};

export default getPage;
