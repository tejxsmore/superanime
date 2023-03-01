import Anime from "./Anime";

export default async function Home() {
  // try {
  //   const res = await fetch(`https://kitsu.io/api/edge/anme`);
  //   if (!res.ok) {
  //     throw new Error("Data fetch Unsuccessfull");
  //   }
  //   const data = await res.json();
  //   return (
  //     <div>
  //       {data.data.map((anime) => (
  //         <Anime
  //           key={anime.id}
  //           id={anime.id}
  //           title={anime.attributes.canonicalTitle}
  //           description={anime.attributes.description}
  //           img={anime.attributes.posterImage.large}
  //         />
  //       ))}
  //     </div>
  //   );
  // } catch (err) {
  //   throw new Error(`${err.message}`);
  // }
  return (
    <main>
      <h1>Hello Tejas !</h1>
    </main>
  );
}
