import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/anime">Anime</Link>
      <Link href="/manga">Manga</Link>
      <Link href="/characters">Characters</Link>
    </div>
  );
}
