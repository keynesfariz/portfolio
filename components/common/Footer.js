import { frameworkLibraries } from "utilities/constants";
import ExternalLink from "./ExternalLink";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-4 text-zinc-400">
      <div className="container mx-auto flex max-w-3xl flex-col justify-between text-center text-xs leading-loose">
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
