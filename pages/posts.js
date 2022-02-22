import { useState } from "react";
import Layout from "components/common/Layout";
import PostSection from "components/posts/PostSection";
import { getAllPosts } from "utilities/blogger";
import Search from "components/posts/Search";

export default function Posts({ label, rawPosts }) {
  let title = label ? `'${label.toUpperCase()}'` : "All Posts";
  title += ` (${rawPosts.length})`;

  const [posts, setPosts] = useState(rawPosts); // post reflected in the UI
  const [searchQuery, setSearchQuery] = useState("");

  const handleLocalSearch = (childQuery) => {
    const newPosts =
      childQuery.length > 0
        ? [
            ...rawPosts.filter(
              (post) =>
                post.title.toLowerCase().indexOf(childQuery.toLowerCase()) > -1
            ),
          ]
        : rawPosts;
    setPosts(newPosts);
    setSearchQuery(childQuery);
  };

  return (
    <Layout meta={{ title }}>
      <h2>
        {label ? (
          <span>
            All Posts under{" "}
            <span className="underline decoration-rose-500 decoration-4 underline-offset-2">{`'${label.toUpperCase()}'`}</span>{" "}
            ({posts.length})
          </span>
        ) : (
          <span>{title}</span>
        )}
      </h2>
      {(posts.length >= 10 || searchQuery) && (
        <Search handleLocalSearch={handleLocalSearch} />
      )}
      {posts.length > 0 ? (
        <PostSection rawPosts={posts} />
      ) : (
        <p className="lead break-words">
          No Post Found under &apos;{searchQuery ? searchQuery : label}&apos;
        </p>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const label = context.query.label ? context.query.label : "";
  const data = await getAllPosts(label);

  if (data.error) {
    // console.log(data.error);
    return {
      notFound: true,
    };
  }

  const rawPosts = data.items ? data.items : [];

  return {
    props: {
      label,
      rawPosts,
    },
  };
}
