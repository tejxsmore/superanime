export default function Manga({ title, img, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt="poster" style={{ height: 300 }} />
      <p>{description}</p>
    </div>
  );
}
