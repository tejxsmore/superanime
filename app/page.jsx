export default async function Home() {
  const res = await fetch(`https://api.jikan.moe/v4/producers`);
  const { data } = await res.json();
  return (
    <main>
      <h1>Welcome to Super Anime</h1>
      <p>One Stop spot for all trending animes and mangas for you</p>
      <h1>Producers :</h1>
      {data.map((person) => (
        <div>
          <img
            src={person.images.jpg.image_url}
            alt="producer"
            style={{ height: 200 }}
          />
        </div>
      ))}
    </main>
  );
}
