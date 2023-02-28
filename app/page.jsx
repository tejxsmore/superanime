import Anime from "./Anime";

export default async function Home() {
  const res = await fetch(`https://kitsu.io/api/edge/anime`);
  const data = await res.json();

  return (
    <div>
      {data.data.map((anime) => (
        <Anime
          key={anime.id}
          id={anime.id}
          title={anime.attributes.canonicalTitle}
          description={anime.attributes.description}
          img={anime.attributes.posterImage.large}
        />
      ))}
    </div>
  );
}
