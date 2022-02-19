import Layout from "components/common/Layout";
import PostSection from "components/posts/PostSection";
import { getAllPosts } from "utilities/blogger";

export default function Writing({ rawPosts }) {
  return (
    <Layout meta={{ title: "Writing" }}>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, beatae?
      </p>
      <PostSection rawPosts={rawPosts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const postlabel = "computer";
  const data = await getAllPosts(postlabel);

  if (data.error || !data.items) {
    return {
      notFound: true,
    };
  }

  const rawPosts = data.items;

  return {
    props: {
      rawPosts,
      revalidate: 60,
    },
  };
}
