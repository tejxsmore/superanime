import MangaCard from "./Card/MangaCard";

export default async function Manga() {
  try {
    const res = await fetch(`https://kitsu.io/api/edge/manga`);

    if (!res.ok) {
      throw new Error("Data fetch Unsuccessfull");
    }
    const { data } = await res.json();

    return (
      <div>
        <h1>Manga</h1>
        <div className="flex overflow-y-hidden overflow-x-scroll">
          {data.map((manga) => (
            <MangaCard
              key={manga.id}
              title={manga.attributes.canonicalTitle}
              description={manga.attributes.description}
              img={manga.attributes.posterImage.original}
            />
          ))}
        </div>
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
