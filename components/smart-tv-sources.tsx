import { SMART_TV_SOURCES } from "@/lib/devices";

export function SmartTvSources() {
  return (
    <section aria-label="Manufacturer guidance" className="mt-8 text-sm text-[#A8AEBC]">
      <p>
        Manufacturer guidance checked <time dateTime="2026-10-22">22 October 2026</time>.
      </p>
      <ul className="mt-2 space-y-2">
        {SMART_TV_SOURCES.map((source) => (
          <li key={source.href}>
            <a className="text-[#25D366] underline" href={source.href} target="_blank" rel="noopener noreferrer">
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
