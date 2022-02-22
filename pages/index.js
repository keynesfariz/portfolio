import Article from "components/common/Article";
import ExternalLink from "components/common/ExternalLink";
import Footer from "components/common/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Under Construction! &mdash; @keynesfariz</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center space-y-6 px-8">
        <div className="flex aspect-square w-16 items-center justify-center rounded-full bg-orange-300 ">
          <i className="fi fi-rr-broom mt-3 animate-bounce text-3xl text-zinc-600"></i>
        </div>
        <Article>
          <div className="text-center">
            <h1>Coming Soon...</h1>
            <p className="lead">
              The road to{" "}
              <span className="underline decoration-teal-500 decoration-4 underline-offset-4">
                success
              </span>{" "}
              is always{" "}
              <span className="underline decoration-rose-500 decoration-4 underline-offset-4">
                under construction
              </span>
            </p>
            <p className="font-sans text-sm text-zinc-400">
              &mdash; Inspired by{" "}
              <ExternalLink href="https://www.dreamstime.com/lkeskinen0_info">
                <span className="text-zinc-500">@Lkeskinen0</span>
              </ExternalLink>
            </p>
          </div>
        </Article>
        <Footer />
      </div>
    </>
  );
}
