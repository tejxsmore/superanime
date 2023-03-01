export default function Manga({ id, title, img, description }) {
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
