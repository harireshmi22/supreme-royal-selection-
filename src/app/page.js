import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Collection from "@/components/sections/Collection";
import OurCraft from "@/components/sections/OurCraft";
import Ingredients from "@/components/sections/Ingredients";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Collection />

      <OurCraft />

      <Ingredients />

      <section
        id="gifting"
        className="section-padding text-center"
      >
        <p className="text-[#a92d13]">
          THE ART OF GIVING
        </p>

        <h2 className="serif-heading mt-8">
          Make every moment <br />
          a little more royal.
        </h2>

        <a
          href="/gifting"
          className="inline-block mt-10
          bg-[#1b100d] text-white
          px-9 py-4 rounded-full"
        >
          Explore gifting ↗
        </a>
      </section>

      <Footer />
    </main>
  );
}