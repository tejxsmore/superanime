import AnimeCard from "../Card/AnimeCard";
import { animeData } from "@/public/data/animeData";

export default async function Anime() {
  const { data } = animeData;
  return (
    <div>
      <h1 className="text-light m-2 font-semibold text-2xl">Anime</h1>
      <div className="flex overflow-x-auto overflow-y-hidden">
        {data.map((anime) => (
          <AnimeCard
            key={anime.id}
            id={anime.id}
            img={anime.attributes.posterImage.medium}
            title={anime.attributes.canonicalTitle}
            detail={anime.attributes.description}
            start={anime.attributes.startDate}
            episode={anime.attributes.episodeCount}
            youtube={anime.attributes.youtubeVideoId}
          />
        ))}
      </div>
    </div>
  );
}
