import moment from "moment";
import Link from "next/link";
import { getSlugFromURL } from "utilities/helpers";

export default function PostSection({ rawPosts }) {
  let posts = [];
  let postYears = [];

  rawPosts.map((item) => {
    const postYear = moment(item.published).format("YYYY");
    if (posts[postYear] === undefined) {
      posts[postYear] = [];
    }
    posts[postYear].push(item);
  });

  for (let year in posts) {
    postYears.push(year);
  }

  postYears.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });

  return postYears
    ? postYears.map((year) => (
        <section
          className="prose-a:underline-offset-4 prose-a:decoration-2 prose-a:decoration-zinc-300 hover:prose-a:text-rose-500 hover:prose-a:decoration-rose-300"
          key={year}
        >
          <h3>{year}</h3>
          <div className="not-prose">
            <hr />
          </div>
          <ul>
            {posts[year].map((post, i) => (
              <li key={i} className="">
                <Link href={"/" + getSlugFromURL(post.url)}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))
    : null;
}
