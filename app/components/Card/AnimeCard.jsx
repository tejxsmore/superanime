import Link from "next/link";

export default function AnimeCard({ id, img }) {
  return (
    <Link href={`/anime/${id}`}>
      <div className="h-auto w-48 max-w-sm m-2 transition-transform hover:scale-105 delay-125">
        <img
          src={img}
          alt="poster"
          className="object-contain rounded-md border-2 border-purple"
        />
      </div>
    </Link>
  );
}
