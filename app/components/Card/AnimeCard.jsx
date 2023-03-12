export default function AnimeCard({ title, description, img, banner }) {
  return (
    <div>
      <div className="h-auto w-48 max-w-sm m-2 transition-transform hover:scale-105 delay-125">
        <img
          src={img}
          alt="poster"
          className="object-contain border-2 border-bgpurp"
        />
      </div>
    </div>
  );
}
