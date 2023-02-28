import "./globals.css";

export const metadata = {
  title: "Anime",
  description: "Fetch latest Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <p>This is navbar 🔥</p>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
        {children}
      </body>
    </html>
  );
}
