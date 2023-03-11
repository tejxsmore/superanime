export default function CharactersCard({ title, description, img }) {
  return (
    <div className="m-4">
      {/* <h1>{title}</h1> */}
      <img src={img} alt="poster" className="w-80" />
      {/* <p>{`${description.slice(0, 300)}...`}</p> */}
    </div>
  );
}
