const header = {
  referrer: "keynesfariz.com",
};

export async function getAllPosts(
  label = "",
  nextPageToken = null,
  queryParams = ""
) {
  let fetchURL = `${process.env.GOOGLE_API_BASE_URL}/posts?key=${process.env.GOOGLE_API_KEY}&maxResults=25&fetchBodies=false&status=LIVE`;

  if (label) fetchURL += `&labels=${label}`;
  if (nextPageToken) fetchURL += `&pageToken=${nextPageToken}`;
  if (queryParams) fetchURL += queryParams;

  const res = await fetch(fetchURL, header);

  return await res.json();
}

export async function getPostByPath(postPath) {
  const fetchURL = `${process.env.GOOGLE_API_BASE_URL}/posts/bypath?key=${process.env.GOOGLE_API_KEY}&path=/${postPath}&status=LIVE&view=READER&fetchImages=true`;
  const res = await fetch(fetchURL, header);

  return await res.json();
}
