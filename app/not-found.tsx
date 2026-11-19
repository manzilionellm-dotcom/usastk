import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <h1 id="page-heading" tabIndex={-1} className="text-4xl font-medium">
        Page not found
      </h1>
      <p className="mt-4">This address does not match a Fire TV guide.</p>
      <Link href="/" className="mt-6 inline-block underline">
        Back to the homepage
      </Link>
    </main>
  );
}
