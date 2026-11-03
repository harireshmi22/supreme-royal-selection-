import Navbar from "@/components/layout/Navbar";
import Collection from "@/components/sections/Collection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "The Collection | Supreme Royal Selection",
  description: "Browse the Supreme Royal Selection chocolate collection.",
};

export default function CollectionPage() {
  return (
    <>
      <Navbar />
      <main className="collection-page">
        <Collection showAll standalone />
      </main>
      <Footer />
    </>
  );
}
