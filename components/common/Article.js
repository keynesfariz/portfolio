export default function Article({ children }) {
  return (
    <article className="prose prose-img:shadow-lg prose-img:mx-auto prose-img:rounded-md md:prose-lg prose-zinc prose-headings:font-sans prose-lead:font-bold prose-p:leading-loose md:prose-headings:leading-snug md:prose-lead:leading-loose prose-headings:decoration-4 prose-headings:underline-offset-2 md:prose-headings:decoration-[6px] md:prose-headings:underline-offset-4 mx-auto max-w-3xl font-serif selection:bg-orange-200 print:max-w-none">
      {children}
    </article>
  );
}
