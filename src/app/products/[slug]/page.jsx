import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main className="product-page">
        <div className="product-page-breadcrumb">
          <Link href="/collection">The collection</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <section className="product-detail">
          <div className="product-detail-media">
            <div
              className={`collection-packaging collection-packaging-${product.tone}`}
              role="img"
              aria-label={`${product.name} product image placeholder`}
            >
              <span className="collection-packaging-mark">SRS</span>
              <span className="collection-packaging-rule" />
              <strong>{product.name}</strong>
              <span className="collection-packaging-subtitle">{product.shortLabel}</span>
              <span className="collection-packaging-weight">{product.weight}</span>
            </div>
            <p>Product image placeholder · replace with final photography</p>
          </div>

          <div className="product-detail-copy">
            <p className="collection-product-type">{product.cacao}</p>
            <h1>{product.name}</h1>
            <p className="product-detail-description">{product.description}</p>

            <div className="product-detail-price">₹{product.price}</div>

            <dl className="product-detail-facts">
              <div>
                <dt>Weight</dt>
                <dd>{product.weight}</dd>
              </div>
              <div>
                <dt>Profile</dt>
                <dd>{product.shortLabel}</dd>
              </div>
            </dl>

            <div className="product-detail-actions">
              <button type="button" className="collection-button collection-button-gold">
                Add to Cart
              </button>
              <Link href="/checkout" className="collection-button collection-button-dark">
                Buy Now
              </Link>
              <Link href="/collection" className="product-detail-back">
                Browse the collection
              </Link>
            </div>
          </div>
        </section>

        <section className="product-specification">
          <div>
            <p className="collection-product-type">Product details</p>
            <h2>Made for a considered pause.</h2>
          </div>
          <div className="product-specification-list">
            <div>
              <span>Ingredients</span>
              <strong>{product.ingredients.map((ingredient) => ingredient.name).join(", ")}</strong>
            </div>
            <div>
              <span>Cacao</span>
              <strong>{product.cacao}</strong>
            </div>
            <div>
              <span>Serving size</span>
              <strong>{product.weight}</strong>
            </div>
          </div>
        </section>

        <section className="product-ingredients">
          <div>
            <p className="collection-product-type">Ingredient notes</p>
            <h2>What makes this chocolate.</h2>
          </div>
          <div className="product-ingredient-grid">
            {product.ingredients.map((ingredient) => (
              <article key={ingredient.name}>
                <h3>{ingredient.name}</h3>
                <p>{ingredient.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="product-video-slot" data-slot="product-making-video">
          <h2>See the craft behind the bar.</h2>
          <p>Replace this slot with a product-making video when it is ready.</p>
          <span className="ingredient-video-play" aria-hidden="true">Play film</span>
        </section>
      </main>
      <Footer />
    </>
  );
}
