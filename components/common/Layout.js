import ContactWrapper from "components/contacts/ContactWrapper";
import Head from "next/head";
import { contacts } from "utilities/constants";
import Article from "./Article";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ meta, showContact = true, children }) {
  const pageMeta = {
    title: "",
    description: "",
    ...meta,
  };

  return (
    <>
      <Head>
        <title>
          {pageMeta.title ? `${pageMeta.title} | ` : ""}Fariz Muhammad, Software
          Engineer
        </title>
        {pageMeta.description && (
          <meta name="description" content={pageMeta.description} />
        )}
      </Head>
      <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col print:border-none md:flex-row">
        <Header />
        <main className="flex-1 border-x border-zinc-200 px-6 pt-8 print:border-none print:px-0 md:px-16 md:pt-20 md:pb-0 lg:pb-12">
          <Article>{children}</Article>
          <div className="-mx-6 mt-8 lg:hidden">
            <Footer contacts={contacts} />
          </div>
        </main>
        <aside className="sticky top-0 hidden h-screen w-64 print:hidden lg:block xl:w-80">
          {showContact && <ContactWrapper />}
          <Footer />
        </aside>
      </div>
    </>
  );
}
