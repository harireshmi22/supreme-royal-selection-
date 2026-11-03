import "./globals.css";
import SmoothScroll from "./components/SmoothScroll.jsx";

export const metadata = {
  title: "Supreme Royal Selection",
  description:
    "Discover handcrafted luxury chocolate from Kerala cacao.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}