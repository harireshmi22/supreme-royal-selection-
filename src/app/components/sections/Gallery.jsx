export default function Gallery() {
  return (
    <section aria-label="Gallery" className="section-padding bg-[#eee4d8]">
      <div className="grid gap-6 md:grid-cols-3">
        {["Origin", "Craft", "Ritual"].map((item) => (
          <div key={item} className="flex aspect-square items-end bg-[#ddcfc1] p-6">
            <h2 className="font-serif text-3xl">{item}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}