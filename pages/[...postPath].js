import Layout from "components/common/Layout";
import moment from "moment";
import Link from "next/link";
import { getAllPosts, getPostByPath } from "utilities/blogger";
import { getSlugFromURL } from "utilities/helpers";

export default function Post({ post }) {
  return (
    <Layout meta={{ title: post.title }}>
      <p className="lead">Posted on {moment(post.published).format("LLL")}</p>
      <h1 className="underline decoration-rose-500 underline-offset-2">
        {post.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      {post.labels && (
        <div className="not-prose pt-4">
          <hr className="mb-1 md:mb-3" />
          {post.labels.map((label) => (
            <Link key={label} href={`/posts?label=${label}`} passHref>
              <a className="mr-2 inline-block cursor-pointer text-sm lowercase text-zinc-500 underline decoration-zinc-400 underline-offset-1 md:text-base">
                #{label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { postPath } = context.params;

  const post = await getPostByPath(postPath.join("/"));

  if (post.error) {
    // console.log(post);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  let paths = [];
  let nextPageToken = null;

  do {
    const data = await getAllPosts("", nextPageToken);

    if (!data.error) {
      data.items.map((post) => {
        const mySlug = getSlugFromURL(post.url);
        console.log(mySlug);
        const myParams = {
          params: {
            postPath: mySlug.split("/"),
          },
        };
        paths.push(myParams);
      });

      nextPageToken = data.nextPageToken ? data.nextPageToken : null;
    }
  } while (nextPageToken);

  return {
    paths,
    fallback: "blocking",
  };
}
