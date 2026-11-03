
"use client";

import { useMemo, useState } from "react";
import { Search, ShoppingBag, PackageCheck } from "lucide-react";

const initialOrders = [
    {
        id: "SRS-1048",
        customer: "Aarav Menon",
        email: "aarav@gmail.com",
        product: "Royal Gift Box",
        amount: 320,
        payment: "Paid",
        status: "Processing",
        date: "03 Nov 2026",
    },
    {
        id: "SRS-1047",
        customer: "Mira Thomas",
        email: "mira@gmail.com",
        product: "Royal Dark",
        amount: 120,
        payment: "Paid",
        status: "Packed",
        date: "02 Nov 2026",
    },
    {
        id: "SRS-1046",
        customer: "Devika Nair",
        email: "devika@gmail.com",
        product: "Choco Grain",
        amount: 45,
        payment: "Pending",
        status: "Delivered",
        date: "01 Nov 2026",
    },
];

export default function OrdersPage() {
    const [orders, setOrders] = useState(initialOrders);
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredOrders = useMemo(() => {
        return orders.filter((order) => {
            const matchesSearch =
                `${order.id} ${order.customer} ${order.product}`
                    .toLowerCase()
                    .includes(query.toLowerCase());

            const matchesFilter =
                filter === "All" || order.status === filter;

            return matchesSearch && matchesFilter;
        });
    }, [orders, query, filter]);

    function updateStatus(id, status) {
        setOrders((current) =>
            current.map((order) =>
                order.id === id ? { ...order, status } : order
            )
        );
    }

    return (
        <div className="admin-content">
            <header className="admin-topbar">
                <div>
                    <p className="admin-breadcrumb">
                        Workspace / Orders
                    </p>
                    <h1>Order management</h1>
                </div>
            </header>

            <div className="admin-metric-grid">
                <article>
                    <span>Total orders</span>
                    <strong>{orders.length}</strong>
                    <ShoppingBag size={22} />
                </article>

                <article>
                    <span>Processing</span>
                    <strong>
                        {orders.filter(o => o.status === "Processing").length}
                    </strong>
                    <PackageCheck size={22} />
                </article>

                <article>
                    <span>Delivered</span>
                    <strong>
                        {orders.filter(o => o.status === "Delivered").length}
                    </strong>
                    <PackageCheck size={22} />
                </article>

                <article>
                    <span>Total order value</span>
                    <strong>
                        ₹{orders.reduce((sum, o) => sum + o.amount, 0)}
                    </strong>
                    <ShoppingBag size={22} />
                </article>
            </div>

            <section className="admin-panel admin-products-panel">
                <div className="admin-panel-heading">
                    <div>
                        <p>Sales management</p>
                        <h2>All orders</h2>
                    </div>
                </div>

                <div className="admin-product-tools">
                    <label className="admin-search">
                        <Search size={16} />
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search orders..."
                        />
                    </label>

                    <select
                        className="admin-select"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option>All</option>
                        <option>Processing</option>
                        <option>Packed</option>
                        <option>Delivered</option>
                    </select>
                </div>

                <div className="admin-table-wrap">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Payment</th>
                                <th>Order status</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredOrders.map((order) => (
                                <tr key={order.id}>
                                    <td><strong>#{order.id}</strong></td>
                                    <td>
                                        <strong>{order.customer}</strong>
                                        <br />
                                        <small>{order.email}</small>
                                    </td>
                                    <td>{order.product}</td>
                                    <td>₹{order.amount}</td>
                                    <td>{order.payment}</td>
                                    <td>
                                        <select
                                            className="admin-select"
                                            value={order.status}
                                            onChange={(e) =>
                                                updateStatus(order.id, e.target.value)
                                            }
                                        >
                                            <option>Processing</option>
                                            <option>Packed</option>
                                            <option>Delivered</option>
                                        </select>
                                    </td>
                                    <td>{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredOrders.length === 0 && (
                        <p>No orders found.</p>
                    )}
                </div>
            </section>
        </div>
    );
}
