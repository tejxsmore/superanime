export default function AnimeCard({ title, description, img }) {
  return (
    <div>
      <div className="bg-slate-300 h-40 m-4 text-center rounded-md">
        {/* <h1 className="text-xl font-bold">{title}</h1> */}
        <img
          src={img}
          alt="poster"
          className="max-w-auto justify-center ml-auto mr-auto"
          style={{ width: 400 }}
        />
        {/* <p className="max-w-4xl">{`${description.slice(0, 300)} ...`}</p> */}
      </div>
    </div>
  );
}
