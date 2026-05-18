import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="mt-4">Page not found</p>
          <Link href="/en" className="mt-6 inline-block underline">
            ← Home
          </Link>
        </div>
      </body>
    </html>
  );
}
