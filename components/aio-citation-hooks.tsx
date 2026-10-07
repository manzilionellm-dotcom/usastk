/** Citation Hooks: question h3 immediately followed by a visible SSR paragraph. Never an accordion. */
export function AioCitationHooks({
  items,
  title = "Questions",
  id = "aio-faq",
  className = "mt-14",
}: {
  items: readonly { q: string; a: string }[];
  title?: string;
  id?: string;
  className?: string;
}) {
  return (
    <section className={className} id={id}>
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium text-[#F5F6F8]">
        {title}
      </h2>
      <p className="mt-3 text-sm text-[#A8AEBC]">
        Short answers about the trial, setup, and WhatsApp.
      </p>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item.q}
            className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5"
          >
            <h3 className="text-lg font-semibold text-[#F5F6F8]">{item.q}</h3>
            <p className="mt-3 mb-0 text-sm leading-relaxed text-[#A8AEBC]">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
