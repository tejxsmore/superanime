import Navbar from "../components/Navbar";

export const metadata = {
  title: "Anime",
  description: "Trending Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
