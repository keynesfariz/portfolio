import { cleanUpPostItem } from "./helpers";

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
  const data = await res.json();

  if (data.error) {
    return data;
  } else if (data.items && data.items.length > 0) {
    return [
      ...data.items.map((post) => {
        return cleanUpPostItem(post);
      }),
    ];
  } else {
    return [];
  }
}

export async function getPostByPath(postPath) {
  const fetchURL = `${process.env.GOOGLE_API_BASE_URL}/posts/bypath?key=${process.env.GOOGLE_API_KEY}&path=/${postPath}&status=LIVE&view=READER&fetchImages=true`;
  const res = await fetch(fetchURL, header);
  const data = await res.json();

  if (data.error) {
    return data;
  } else {
    return cleanUpPostItem(data);
  }
}
