"use client";

import { useState } from "react";
import { Search, CirclePlus } from "lucide-react";
import { products } from "@/lib/products";

export default function ProductsPage() {
    const [query, setQuery] = useState("");

    const filteredProducts = products.filter((product) =>
        `${product.name} ${product.cacao}`
            .toLowerCase()
            .includes(query.toLowerCase())
    );

    return (
        <div className="admin-content">
            <header className="admin-topbar">
                <div>
                    <p className="admin-breadcrumb">
                        Workspace / Products
                    </p>
                    <h1>Product management</h1>
                </div>
            </header>

            <section className="admin-panel admin-products-panel">
                <div className="admin-panel-heading">
                    <div>
                        <p>Catalogue</p>
                        <h2>All products</h2>
                    </div>

                    <button className="admin-primary-button">
                        <CirclePlus size={16} />
                        Add product
                    </button>
                </div>

                <label className="admin-search">
                    <Search size={16} />

                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search products"
                    />
                </label>

                <div className="admin-table-wrap">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Weight</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredProducts.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.cacao}</td>
                                    <td>₹{product.price}</td>
                                    <td>{product.weight}</td>
                                    <td>Published</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}