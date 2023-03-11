import Anime from "./components/Anime";
import Manga from "./components/Manga";
import Characters from "./components/Characters";
import Navbar from "./components/Navbar";

export default async function Home() {
  return (
    <div class="scrollbar">
      <Navbar />
      <Anime />
      <Manga />
      <Characters />
    </div>
  );
}
