import "./globals.css";

export const metadata = {
  title: "Anime",
  description: "Find Latest Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
