import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <h2>About Page</h2>

      <p>This page was created using App Router.</p>

      <br />

      <Link href="/">
        Go Back Home
      </Link>
    </main>
  );
}