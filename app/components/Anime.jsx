import AnimeCard from "./Card/AnimeCard";

export default async function Anime() {
  try {
    const res = await fetch(`https://kitsu.io/api/edge/anime`);
    if (!res.ok) {
      throw new Error("Data fetch Unsuccessfull");
    }
    const data = await res.json();
    return (
      <div className="flex overflow-auto w-full m-4">
        <h1>Anime</h1>
        {data.data.map((anime) => (
          <AnimeCard
            key={anime.id}
            title={anime.attributes.canonicalTitle}
            description={anime.attributes.description}
            img={anime.attributes.posterImage.original}
          />
        ))}
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
