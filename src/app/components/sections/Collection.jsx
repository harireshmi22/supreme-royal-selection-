"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function ProductImage({ product }) {
  return (
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
  );
}

export default function Collection({ showAll = false, standalone = false }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedProduct, setAddedProduct] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load products");
        return response.json();
      })
      .then(setProducts)
      .catch(() => setError("The collection is temporarily unavailable."))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!selectedProduct) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProduct(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  const handleAddToCart = (product) => {
    setAddedProduct(product.id);
    window.setTimeout(() => setAddedProduct(""), 2200);
  };

  return (
    <section id="collections" className={`collection-section ${standalone ? "collection-section-standalone" : ""}`}>
      <div className="collection-intro collection-intro-luxury">
        <div>
          <h2 className="collection-heading">
            A little luxury,
            <span>made to share.</span>
          </h2>
        </div>
        <p className="collection-lede">
          Small-batch chocolate made with care, wrapped in the signature SRS
          palette of midnight, cream, and royal gold.
        </p>
      </div>

      {loading ? (
        <p className="collection-status" role="status">Preparing the collection.</p>
      ) : error ? (
        <p className="collection-status collection-status-error" role="status">{error}</p>
      ) : (
        <div className="collection-grid collection-grid-luxury">
          {products.slice(0, showAll ? products.length : 2).map((product, index) => (
            <article
              className={`collection-product collection-product-luxury ${index === 0 ? "collection-product-featured" : ""}`}
              key={product.id}
            >
              <div className="collection-product-media">
                {index === 0 && <span className="collection-featured-label">Featured selection</span>}
                <ProductImage product={product} />
                <span className="collection-edition">0{index + 1}</span>
              </div>

              <div className="collection-product-info">
                <div className="collection-product-title">
                  <p className="collection-product-type">
                    {product.cacao || "Signature cacao"}
                  </p>
                  <h3>{product.name}</h3>
                </div>

                <p className="collection-price">₹{product.price}</p>

                <p className="collection-description">{product.description}</p>

                <dl className="collection-facts">
                  <div>
                    <dt>Weight</dt>
                    <dd>{product.weight}</dd>
                  </div>
                  <div>
                    <dt>Profile</dt>
                    <dd>{product.shortLabel}</dd>
                  </div>
                </dl>

                <div className="collection-actions">
                  <Link
                    href={`/products/${product.slug}`}
                    className="collection-button collection-button-dark"
                  >
                    View Product
                  </Link>
                  <button
                    type="button"
                    className="collection-button collection-button-gold"
                    onClick={() => handleAddToCart(product)}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    {addedProduct === product.id ? "Added to Cart" : "Add to Cart"}
                  </button>
                  <Link
                    href="/checkout"
                    className="collection-button collection-button-outline"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <p className="collection-note">
        Product photography can replace the packaging placeholders when the
        final images are ready.
      </p>

      {selectedProduct && !standalone && (
        <div
          className="collection-dialog-backdrop"
          role="presentation"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="collection-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="collection-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="collection-dialog-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
            >
              ×
            </button>
            <p className="collection-product-type">SRS Royal Collection</p>
            <h3 id="collection-dialog-title">{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <div className="collection-dialog-meta">
              <span>{selectedProduct.weight}</span>
              <strong>₹{selectedProduct.price}</strong>
            </div>
            <button
              type="button"
              className="collection-button collection-button-gold"
              onClick={() => handleAddToCart(selectedProduct)}
            >
              {addedProduct === selectedProduct.id ? "Added to Cart" : "Add to Cart"}
            </button>
            <Link
              href="/checkout"
              className="collection-button collection-button-outline"
            >
              Buy Now
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
