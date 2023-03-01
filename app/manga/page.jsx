import Manga from "./Manga";

export default async function Home() {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/manga/`);
    if (!res.ok) {
      throw new Error("Data fetch Unsuccessfull");
    }

    const { data } = await res.json();
    return (
      <div>
        {data.map((manga) => (
          <Manga
            key={manga.mal_id}
            title={manga.title}
            description={manga.background}
            img={manga.images.jpg.large_image_url}
          />
        ))}
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
