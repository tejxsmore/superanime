export default async function Banner() {
  const res = await fetch(`https://kitsu.io/api/edge/anime`);
  const { data } = await res.json();
  const banner = data[2].attributes.coverImage.large;

  return (
    <div className="gradient-mask-b-0 h-auto m-2">
      <img
        src={banner}
        alt="Banner"
        className="gradient-mask-t-0 brightness-120"
      />
    </div>
  );
}
