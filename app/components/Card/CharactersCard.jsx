export default function CharactersCard({ title, description, img }) {
  return (
    <div>
      <div className="h-auto w-48 max-w-sm m-2  transition-transform hover:scale-105 delay-125">
        {/* <h1>{title}</h1> */}
        <img
          src={img}
          alt="poster"
          className="object-contain border-2 border-bgpurp"
        />
        {/* <p>{`${description.slice(0, 300)}...`}</p> */}
      </div>
    </div>
  );
}
