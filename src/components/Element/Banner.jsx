import { animeData } from "@/public/data/animeData";

export default async function Banner() {
  const { data } = animeData;
  const banner0 = data[0].attributes.coverImage.large;
  const banner1 = data[1].attributes.coverImage.large;
  const banner2 = data[2].attributes.coverImage.large;

  return (
    <div className="gradient-mask-b-0 h-auto m-2">
      <img
        src={banner2}
        alt="Banner"
        className="gradient-mask-t-0 brightness-120"
      />
    </div>
  );
}
