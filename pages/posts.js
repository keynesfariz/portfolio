import Layout from "components/common/Layout";
import PostSection from "components/posts/PostSection";
import { getAllPosts } from "utilities/blogger";

export default function Posts({ label, rawPosts }) {
  let title = label ? `'${label.toUpperCase()}'` : "All Posts";
  title += ` (${rawPosts.length})`;

  return (
    <Layout meta={{ title }}>
      <h2>
        {label ? (
          <span>
            All Posts under{" "}
            <span className="underline decoration-rose-500 decoration-4 underline-offset-2">{`'${label.toUpperCase()}'`}</span>{" "}
            ({rawPosts.length})
          </span>
        ) : (
          <span>{title}</span>
        )}
      </h2>
      {rawPosts ? (
        <PostSection rawPosts={rawPosts} />
      ) : (
        <p className="lead">
          No Post Found under {label} &apos;, &lsquo;, &#39;, &rsquo;
        </p>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const label = context.query.label ? context.query.label : "";
  const data = await getAllPosts(label);

  if (data.error) {
    return {
      notFound: true,
    };
  }

  const rawPosts = data.items;

  return {
    props: {
      label,
      rawPosts,
    },
  };
}
