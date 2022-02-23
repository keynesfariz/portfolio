import { useState } from "react";
import Layout from "components/common/Layout";
import PostSection from "components/posts/PostSection";
import { getAllPosts } from "utilities/blogger";
import Search from "components/posts/Search";

export default function Posts({ label, posts }) {
  const [query, setQuery] = useState("");
  const filteredPosts =
    query === ""
      ? posts
      : posts.filter((post) => {
          return post.title.toLowerCase().includes(query.toLowerCase());
        });

  const title = label
    ? `'${label.toUpperCase()}' in Posts (${posts.length})`
    : `All Posts (${posts.length})`;

  return (
    <Layout meta={{ title }}>
      <h2>
        {label ? (
          <span>
            <span className="underline decoration-rose-500 decoration-[3px] underline-offset-[3px]">{`'${label.toUpperCase()}'`}</span>{" "}
            in Posts ({posts.length})
          </span>
        ) : (
          <span>
            <span className="underline decoration-rose-500 decoration-[3px] underline-offset-[3px]">
              All
            </span>{" "}
            Posts ({posts.length})
          </span>
        )}
      </h2>
      <Search parentOnChange={(q) => setQuery(q)} />
      {filteredPosts.length > 0 ? (
        <PostSection posts={filteredPosts} />
      ) : query || label ? (
        <p className="lead">
          No posts found under{" "}
          <span className="underline decoration-orange-300 decoration-[3px] underline-offset-[3px]">{`'${
            query ? query.toLowerCase() : label.toLowerCase()
          }'`}</span>
        </p>
      ) : (
        <p className="lead">No posts found.</p>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const label = context.query.label ? context.query.label : "";
  const posts = await getAllPosts(label);

  if (posts.error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      label,
      posts,
    },
  };
}
