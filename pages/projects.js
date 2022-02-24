import Layout from "components/common/Layout";
import PostSection from "components/posts/PostSection";
import { getAllPosts, getPageById } from "utilities/blogger";
import { _PAGE_FORMER_PROJECTS_ID, _LABEL_PROJECT } from "utilities/constants";

export default function Projects({ posts, formerProjectPage }) {
  return (
    <Layout meta={{ title: "Projects" }}>
      <h1>Projects</h1>
      <p className="lead">
        Below are some of my projects that I&apos;ve worked on and I can
        remember (because I&apos;m bad at keeping track of them)
      </p>
      <PostSection posts={posts} />
      {formerProjectPage && (
        <>
          <hr />
          <h2>{formerProjectPage.title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: formerProjectPage.content }}
          />
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getAllPosts(_LABEL_PROJECT);

  if (data.error) {
    return {
      notFound: true,
    };
  }

  const formerProjectPage = await getPageById(_PAGE_FORMER_PROJECTS_ID);

  return {
    revalidate: 60,
    props: {
      posts: data,
      formerProjectPage,
    },
  };
}
