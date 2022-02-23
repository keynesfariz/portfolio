import Layout from "components/common/Layout";
import PostSection from "components/posts/PostSection";
import { getAllPosts } from "utilities/blogger";
import { PROJECT } from "utilities/constants";

export default function Projects({ posts }) {
  return (
    <Layout meta={{ title: "Projects" }}>
      <h1>Projects</h1>
      <p className="lead">
        Below are some of my projects that I&apos;ve worked on and I can
        remember (because I&apos;m bad at keeping track of them)
      </p>
      <PostSection posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getAllPosts(PROJECT);

  if (data.error) {
    return {
      notFound: true,
    };
  }

  return {
    revalidate: 60,
    props: {
      posts: data,
    },
  };
}
