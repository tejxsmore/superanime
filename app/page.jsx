import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Anime from "./components/Anime";
import Manga from "./components/Manga";
import Characters from "./components/Characters";
import Footer from "./components/Footer";

export default async function Home() {
  return (
    <div className="bg-bg p-2">
      <Navbar />
      <Banner />
      <Anime />
      <Manga />
      <Characters />
      <Footer />
    </div>
  );
}
