import Navbar from "../components/Navbar";

export const metadata = {
  title: "Manga",
  description: "Trending Manga",
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
