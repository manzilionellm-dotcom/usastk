import Link from "next/link";

/* Shared shell for the legal pages (/terms, /privacy, /refund). */

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();
  return (
    <main className="min-h-screen bg-[#0B0E16] font-[family-name:var(--font-body)] text-[#F5F6F8] antialiased">
      <header className="border-b border-[#1F2433] bg-[#0B0E16]/85">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-lg font-medium tracking-tight"
          >
            IPTV For Firestick USA<span className="text-[#DC2626]">.</span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[#2A3142] bg-[#1A1F2E] px-4 py-2 text-sm text-[#A8AEBC] transition hover:border-[#4F7DFF] hover:text-[#F5F6F8]"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-[#6E7585]">Last updated: {updated}</p>
        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-[#A8AEBC] [&_h2]:mt-10 [&_h2]:font-[family-name:var(--font-display)] [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-[#F5F6F8] [&_strong]:text-[#F5F6F8]">
          {children}
        </div>
      </article>

      <footer className="border-t border-[#1F2433]">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-5 py-8 text-xs text-[#6E7585] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} IPTV For Firestick USA — IPTV service + guides.</p>
          <p className="flex gap-4">
            <Link className="transition hover:text-[#F5F6F8]" href="/terms">Terms</Link>
            <Link className="transition hover:text-[#F5F6F8]" href="/privacy">Privacy</Link>
            <Link className="transition hover:text-[#F5F6F8]" href="/refund">Refunds</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
