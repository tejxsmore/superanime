import Anime from "./components/Anime";
import Manga from "./components/Manga";
import Characters from "./components/Characters";

export default async function Home() {
  return (
    <main>
      <Anime />
      <Manga />
      <Characters />
    </main>
  );
}
