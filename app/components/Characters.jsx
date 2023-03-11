import CharactersCard from "./Card/CharactersCard";

export default async function Characters() {
  try {
    const res = await fetch(`https://kitsu.io/api/edge/characters`);
    if (!res.ok) {
      throw new Error("Data fetch Unsuccessfull");
    }
    const data = await res.json();
    return (
      <div className="flex">
        <h1>Characters</h1>
        {data.data.map((char) => (
          <CharactersCard
            key={char.id}
            title={char.attributes.canonicalName}
            description={char.attributes.description}
            img={char.attributes.image.original}
          />
        ))}
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
