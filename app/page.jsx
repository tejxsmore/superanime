import Navbar from "./components/Navbar";
import Anime from "./components/Anime";
import Manga from "./components/Manga";
import Characters from "./components/Characters";
import Footer from "./components/Footer";

export default async function Home() {
  return (
    <div className="bg-bg p-2">
      <Navbar />
      <Anime />
      <Manga />
      <Characters />
      <Footer />
    </div>
  );
}
