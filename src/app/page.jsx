import Navbar from "../components/Element/Navbar";
import Banner from "../components/Element/Banner";
import Anime from "../components/Row/Anime";
import Manga from "../components/Row/Manga";
import Characters from "../components/Row/Characters";
import Footer from "../components/Element/Footer";

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
