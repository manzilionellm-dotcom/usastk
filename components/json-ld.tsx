/**
 * Renders a JSON-LD graph safely. Pass an array of schema.org node objects.
 */
export function JsonLd({ graph }: { graph: object[] }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": graph,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
