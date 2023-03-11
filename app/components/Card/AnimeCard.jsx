export default function AnimeCard({ title, description, img }) {
  return (
    <div>
      <div className="h-60 w-48 max-w-sm m-2">
        {/* <h1 className="text-xl font-bold">{title}</h1> */}
        <img src={img} alt="poster" className="object-contain" />
        {/* <p className="max-w-4xl">{`${description.slice(0, 300)} ...`}</p> */}
      </div>
    </div>
  );
}
