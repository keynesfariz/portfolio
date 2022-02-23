import moment from "moment";
import Link from "next/link";
import { getSlugFromURL } from "utilities/helpers";

export default function PostSection({ posts }) {
  let renderedPosts = [];
  let renderedYears = [];

  posts.map((item) => {
    const postYear = moment(item.published).format("YYYY");
    if (renderedPosts[postYear] === undefined) {
      renderedPosts[postYear] = [];
    }
    renderedPosts[postYear].push(item);
  });

  for (let year in renderedPosts) {
    renderedYears.push(year);
  }

  renderedYears.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });

  return renderedYears
    ? renderedYears.map((year) => (
        <section
          className="prose-a:underline-offset-4 prose-a:decoration-2 prose-a:decoration-zinc-300 hover:prose-a:text-rose-500 hover:prose-a:decoration-rose-300"
          key={year}
        >
          <h3>{year}</h3>
          <div className="not-prose">
            <hr />
          </div>
          <ul>
            {renderedPosts[year].map((post, i) => (
              <li key={i}>
                <Link href={`/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))
    : null;
}
