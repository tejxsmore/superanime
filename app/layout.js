import "./globals.css";

export const metadata = {
  title: "Super Anime",
  description: "Find Latest Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
