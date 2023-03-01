import Anime from "./Anime";

export default async function Home() {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/`);
    if (!res.ok) {
      throw new Error("Data fetch Unsuccessfull");
    }
    const data = await res.json();
    return (
      <div>
        {data.data.map((anime) => (
          <Anime
            key={anime.mal_id}
            title={anime.title}
            description={anime.background}
            img={anime.images.jpg.large_image_url}
          />
        ))}
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
