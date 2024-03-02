export const createAltText = (url: string) => {
  const splitUrl = url.split("/");
  const lastPart = splitUrl[splitUrl.length - 1];
  const splitLastPart = lastPart.split(".");
  const altText = splitLastPart[0].replace(/-/g, " ");
  return altText;
};
