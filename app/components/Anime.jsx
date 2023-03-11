import AnimeCard from "./Card/AnimeCard";

export default async function Anime() {
  try {
    const res = await fetch(`https://kitsu.io/api/edge/anime`);
    if (!res.ok) {
      throw new Error("Data fetch Unsuccessfull");
    }
    const { data } = await res.json();
    return (
      <div>
        <h1 className="text-light m-2 font-semibold text-2xl">Anime</h1>
        <div className="flex overflow-x-auto overflow-y-hidden">
          {data.map((anime) =>
            anime.attributes.posterImage.medium ? (
              <AnimeCard
                key={anime.id}
                title={anime.attributes.canonicalTitle}
                description={anime.attributes.description}
                img={anime.attributes.posterImage.medium}
              />
            ) : (
              <div></div>
            )
          )}
        </div>
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
