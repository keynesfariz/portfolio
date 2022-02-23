import Layout from "components/common/Layout";
import PostSection from "components/posts/PostSection";
import { getAllPosts } from "utilities/blogger";
import { PROJECT } from "utilities/constants";

export default function Writing({ posts }) {
  return (
    <Layout meta={{ title: "Writing" }}>
      <h1>Writing</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, beatae?
      </p>
      <PostSection posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getAllPosts();

  if (data.error) {
    return {
      notFound: true,
    };
  }

  const posts =
    data.length > 0
      ? data.filter((post) => {
          const labels = post.labels;
          if (labels === undefined) {
            return true;
          } else if (labels.some((l) => l === PROJECT)) {
            return false;
          } else {
            return true;
          }
        })
      : [];

  return {
    revalidate: 60,
    props: {
      posts,
    },
  };
}
