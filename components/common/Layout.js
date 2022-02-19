import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ meta, children }) {
  const pageMeta = {
    title: "",
    description: "",
    ...meta,
  };

  const contacts = {
    email: "muhafariz@gmail.com",
    github: "https://github.com/keynesfariz",
    linkedin: "https://linkedin.com/in/keynesfariz",
    twitter: "https://twitter.com/keynesfariz",
    instagram: "https://instagram.com/keynesfariz",
  };

  const ContactSection = ({ title, children }) => {
    return (
      <section className="space-y-2">
        <h3 className="text-lg font-bold uppercase tracking-wide">{title}</h3>
        <ul className="space-y-1">{children}</ul>
      </section>
    );
  };

  const ContactLink = ({ href, capitalize = true, children }) => {
    return (
      <li
        className={`font-serif font-bold text-teal-500 underline decoration-2 underline-offset-2 ${
          capitalize ? "capitalize" : ""
        }`}
      >
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      </li>
    );
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
          <article className="prose prose-img:shadow-lg prose-img:mx-auto prose-img:rounded-md md:prose-lg prose-zinc prose-headings:font-sans prose-lead:font-bold prose-p:leading-loose md:prose-headings:leading-snug md:prose-lead:leading-loose prose-headings:decoration-4 prose-headings:underline-offset-2 md:prose-headings:decoration-[6px] md:prose-headings:underline-offset-4 mx-auto  max-w-3xl font-serif selection:bg-orange-200 print:max-w-none">
            {children}
          </article>
          <div className="-mx-6 mt-8 lg:hidden">
            <Footer contacts={contacts} />
          </div>
        </main>
        <aside className="sticky top-0 hidden h-screen w-64 print:hidden lg:block xl:w-80">
          <div className="space-y-6 px-6 pt-20 leading-relaxed">
            <ContactSection title="email">
              <ContactLink href={`mailto:${contacts.email}`} capitalize={false}>
                {contacts.email}
              </ContactLink>
            </ContactSection>
            <ContactSection title="elsewhere">
              {Object.keys(contacts).map((key, i) => {
                if (key !== "email") {
                  return (
                    <ContactLink key={i} href={contacts[key]}>
                      {key}
                    </ContactLink>
                  );
                } else {
                  return null;
                }
              })}
            </ContactSection>
          </div>
          <Footer />
        </aside>
      </div>
    </>
  );
}
