export default function ExternalLink({ href, children }) {
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
}
