export default function ContactLink({ href, capitalize = true, children }) {
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
}
