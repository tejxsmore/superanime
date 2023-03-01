import Characters from "./Characters";

export default async function Home() {
  try {
    const res = await fetch(`https://kitsu.io/api/edge/characters`);
    if (!res.ok) {
      throw new Error("Data fetch Unsuccessfull");
    }
    const data = await res.json();
    return (
      <div>
        {data.data.map((char) => (
          <Characters
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
