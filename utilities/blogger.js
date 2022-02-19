export async function getAllPosts(
  label = "",
  nextPageToken = null,
  queryParams = ""
) {
  let fetchURL = `${process.env.GOOGLE_API_BASE_URL}/posts?key=${process.env.GOOGLE_API_KEY}&maxResults=25&fetchBodies=false`;

  if (label) fetchURL += `&labels=${label}`;
  if (nextPageToken) fetchURL += `&pageToken=${nextPageToken}`;
  if (queryParams) fetchURL += queryParams;

  const res = await fetch(fetchURL);

  return await res.json();
}

export async function getPostByPath(postPath) {
  let fetchURL = `${process.env.GOOGLE_API_BASE_URL}/posts/bypath?key=${process.env.GOOGLE_API_KEY}&path=/${postPath}`;

  const res = await fetch(fetchURL);

  return await res.json();
}
