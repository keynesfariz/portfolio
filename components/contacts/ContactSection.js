export default function ContactSection({ title, children }) {
  return (
    <section className="space-y-2">
      <h3 className="text-lg font-bold uppercase tracking-wide">{title}</h3>
      <ul className="space-y-1">{children}</ul>
    </section>
  );
}
