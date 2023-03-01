import Manga from "./Manga";

export default async function Home() {
  try {
    const res = await fetch(`https://kitsu.io/api/edge/manga`);
    if (!res.ok) {
      throw new Error("Data fetch Unsuccessfull");
    }

    const data = await res.json();
    return (
      <div>
        {data.data.map((manga) =>
          manga.attributes.posterImage.large ? (
            <Manga
              key={manga.id}
              id={manga.id}
              title={manga.attributes.canonicalTitle}
              description={manga.attributes.description}
              img={manga.attributes.posterImage.large}
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
