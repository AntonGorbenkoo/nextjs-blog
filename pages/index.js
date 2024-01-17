import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link href="/page">Go to Home Page</Link>
      <br />
      <Link href="/test">Go to About Page</Link>
    </div>
  );
}
