import { frameworkLibraries } from "utilities/constants";
import ExternalLink from "./ExternalLink";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-4 text-zinc-400 lg:absolute lg:inset-x-0 lg:bottom-0">
      <div className="container mx-auto flex max-w-3xl flex-col text-xs leading-loose md:flex-row md:justify-between lg:flex-col lg:text-center">
        <span>Copyright &copy; 2022</span>
        <span>
          {"Made with "}
          <ExternalLink href={frameworkLibraries.nextjs.link}>
            {frameworkLibraries.nextjs.name}
          </ExternalLink>
          {", using "}
          <ExternalLink href={frameworkLibraries.blogger.link}>
            {frameworkLibraries.blogger.name}
          </ExternalLink>
          {", "}
          <ExternalLink href={frameworkLibraries.tailwind.link}>
            {frameworkLibraries.tailwind.name}
          </ExternalLink>
          {" and "}
          <ExternalLink href={frameworkLibraries.flaticon.link}>
            {frameworkLibraries.flaticon.name}
          </ExternalLink>
          {". Deployed to "}
          <ExternalLink href={frameworkLibraries.vercel.link}>
            {frameworkLibraries.vercel.name}
          </ExternalLink>
        </span>
      </div>
    </footer>
  );
}
