export function getSlugFromURL(url) {
  const urls = url.split("/");
  const slugs = urls.slice(urls.length - 3);
  return slugs.join("/");
}
