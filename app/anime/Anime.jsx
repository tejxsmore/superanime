export default function Anime({ id, title, description, img }) {
  return (
    <div>
      <h1>
        {id} - {title}
      </h1>
      <img src={img} alt="poster" style={{ height: 200 }} />
      <p>{description}</p>
    </div>
  );
}
