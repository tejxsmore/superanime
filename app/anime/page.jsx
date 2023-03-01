import Anime from "./Anime";

export default async function Home() {
  try {
    const res = await fetch(`https://kitsu.io/api/edge/anime`);
    if (!res.ok) {
      throw new Error("Data fetch Unsuccessfull");
    }
    const data = await res.json();
    return (
      <div>
        {data.data.map((anime) =>
          anime.attributes.posterImage.large ? (
            <Anime
              key={anime.id}
              id={anime.id}
              title={anime.attributes.canonicalTitle}
              description={anime.attributes.description}
              img={anime.attributes.posterImage.large}
            />
          ) : (
            <div></div>
          )
        )}
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
