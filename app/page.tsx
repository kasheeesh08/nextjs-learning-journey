import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Next.js Learning Journey</h1>

      <p>This is my first custom Next.js page.</p>

      <br />

      <Link href="/about">
        Go To About Page
      </Link>
    </main>
  );
}