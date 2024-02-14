import CharactersCard from "../Card/CharacterCard";

export default async function Characters() {
  try {
    const res = await fetch(`https://kitsu.io/api/edge/characters`);
    if (!res.ok) {
      throw new Error("Data fetch Unsuccessfull");
    }
    const { data } = await res.json();
    return (
      <div>
        <h1 className="text-light m-2 font-semibold text-2xl">Characters</h1>
        <div className="flex overflow-x-scroll overflow-y-hidden">
          {data.map((char) =>
            char.attributes.image.original ? (
              <CharactersCard
                key={char.id}
                id={char.id}
                title={char.attributes.canonicalName}
                description={char.attributes.description}
                img={char.attributes.image.original}
              />
            ) : (
              <div></div>
            )
          )}
        </div>
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
