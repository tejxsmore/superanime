import Manga from "./Manga";

export default async function Home() {
  try {
    const res = await fetch(`https://kitsu.io/api/edge/manga`);
    if (!res.ok) {
      throw new Error("Data fetch Unsuccessfull");
    }

    const { data } = await res.json();
    return (
      <div>
        {data.map((manga) => (
          <Manga
            key={manga.id}
            title={manga.attributes.canonicalTitle}
            description={manga.attributes.description}
            img={manga.attributes.posterImage.original}
          />
        ))}
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
