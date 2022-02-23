export function getSlugFromURL(url) {
  const urls = url.split("/");
  const slugs = urls.slice(urls.length - 3);
  return slugs.join("/");
}

export function cleanUpPostItem(post) {
  return post
    ? {
        id: post.id,
        title: post.title,
        url: post.url,
        slug: getSlugFromURL(post.url),
        content: post.content ? post.content : null,
        labels: post.labels ? post.labels : [],
        images: post.images ? post.images : [],
        updated: post.updated,
        published: post.published,
      }
    : null;
}
