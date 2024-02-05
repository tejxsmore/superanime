import MangaCard from "../Card/MangaCard";
import { mangaData } from "@/public/data/mangaData";

export default async function Manga() {
  try {
    const { data } = mangaData;

    return (
      <div>
        <h1 className="text-light m-2 font-semibold text-2xl">Manga</h1>
        <div className="flex overflow-y-hidden overflow-x-scroll">
          {data.map((manga) => (
            <MangaCard
              key={manga.id}
              id={manga.id}
              img={manga.attributes.posterImage.medium}
              title={manga.attributes.canonicalTitle}
              detail={manga.attributes.description}
              start={manga.attributes.startDate}
              rating={manga.attributes.averageRating}
              episode={manga.attributes.chapterCount}
              youtube={manga.attributes.youtubeVideoId}
            />
          ))}
        </div>
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
