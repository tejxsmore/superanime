import Navbar from "../components/Navbar";

export const metadata = {
  title: "Characters",
  description: "Trending Characters",
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
