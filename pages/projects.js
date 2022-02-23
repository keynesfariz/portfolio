import Layout from "components/common/Layout";
import PostSection from "components/posts/PostSection";
import { getAllPosts, getPageById } from "utilities/blogger";
import { _FORMER_PROJECT_PAGE_ID, _PROJECT_LABEL } from "utilities/constants";

export default function Projects({ posts, formerProjectContent }) {
  return (
    <Layout meta={{ title: "Projects" }}>
      <h1>Projects</h1>
      <p className="lead">
        Below are some of my projects that I&apos;ve worked on and I can
        remember (because I&apos;m bad at keeping track of them)
      </p>
      <PostSection posts={posts} />
      {formerProjectContent && (
        <>
          <hr />
          <h2>Former Projects</h2>
          <div dangerouslySetInnerHTML={{ __html: formerProjectContent }} />
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getAllPosts(_PROJECT_LABEL);

  if (data.error) {
    return {
      notFound: true,
    };
  }

  const formerProjectPage = await getPageById(_FORMER_PROJECT_PAGE_ID);
  const formerProjectContent = formerProjectPage.content
    ? formerProjectPage.content
    : null;

  return {
    revalidate: 60,
    props: {
      posts: data,
      formerProjectContent,
    },
  };
}
