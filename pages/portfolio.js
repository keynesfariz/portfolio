import Layout from "components/common/Layout";
import PostSection from "components/posts/PostSection";
import { getAllPosts } from "utilities/blogger";

export default function Portfolio({ rawPosts }) {
  return (
    <Layout meta={{ title: "Portfolio" }}>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maxime
        accusamus? Commodi itaque quo consectetur vitae? Dolorem, impedit
        aliquam. Magnam.
      </p>
      <PostSection rawPosts={rawPosts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const postlabel = "design";
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
