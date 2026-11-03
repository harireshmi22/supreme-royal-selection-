export default function Ingredients() {
  const ingredients = [
    {
      name: "Cocoa",
      description: "The deep, generous base behind every SRS chocolate.",
    },
    {
      name: "Roasted grain",
      description: "A crisp, golden note that gives Choco Grain its texture.",
    },
    {
      name: "Almond",
      description: "A warm, delicate crunch for richer chocolate moments.",
    },
    {
      name: "Cashew",
      description: "A soft, buttery finish in selected chocolate pieces.",
    },
  ];

  return (
    <section id="ingredients" className="ingredients-section">
      <div className="ingredients-heading">
        <h2>What goes into the ritual</h2>
        <p>
          We keep the ingredient story clear: cocoa first, texture where it
          belongs, and every final detail confirmed before release.
        </p>
      </div>

      <div className="ingredients-grid">
        {ingredients.map((ingredient) => (
          <article className="ingredient-item" key={ingredient.name}>
            <span className="ingredient-mark" aria-hidden="true">+</span>
            <h3>{ingredient.name}</h3>
            <p>{ingredient.description}</p>
          </article>
        ))}
      </div>

      <div className="ingredient-video-slot" data-slot="chocolate-making-video">
        <span className="ingredient-video-kicker">The making of SRS</span>
        <strong>Chocolate, from ingredient to ritual.</strong>
        <p>Replace this slot with the chocolate-making film when it is ready.</p>
        <span className="ingredient-video-play" aria-hidden="true">Play film</span>
      </div>
    </section>
  );
}