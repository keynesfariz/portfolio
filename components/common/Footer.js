export default function Footer() {
  const ExternalLink = ({ href, children }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer font-bold underline"
      >
        {children}
      </a>
    );
  };

  return (
    <footer className="border-t border-zinc-200 px-6 py-4 text-zinc-400 lg:absolute lg:inset-x-0 lg:bottom-0">
      <div className="container mx-auto flex max-w-3xl flex-col text-xs leading-loose md:flex-row md:justify-between lg:flex-col lg:text-center">
        <span>Copyright &copy; 2022</span>
        <span className="">
          Made with{" "}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>
          {", using "}
          <ExternalLink href="https://www.blogger.com">Blogger</ExternalLink>
          {", "}
          <ExternalLink href="https://tailwindcss.com">
            TailwindCSS
          </ExternalLink>
          {" and "}
          <ExternalLink href="https://www.flaticon.com">flaticon</ExternalLink>
          {". Deployed to "}
          <ExternalLink href="https://vercel.com">Vercel</ExternalLink>
        </span>
      </div>
    </footer>
  );
}
