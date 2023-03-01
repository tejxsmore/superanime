import Characters from "./Characters";

export default async function Home() {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/characters`);
    if (!res.ok) {
      throw new Error("Data fetch Unsuccessfull");
    }

    const { data } = await res.json();

    return (
      <div>
        {data.map((char) => (
          <Characters
            key={char.mal_id}
            title={char.name}
            description={char.about}
            img={char.images.jpg.image_url}
          />
        ))}
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
