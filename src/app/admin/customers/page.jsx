
"use client";

import { useMemo, useState } from "react";
import { Search, Users, UserCheck, Wallet } from "lucide-react";

const customers = [
    {
        id: 1,
        name: "Aarav Menon",
        email: "aarav@gmail.com",
        phone: "+91 9876543210",
        orders: 5,
        spent: 1250,
        joined: "12 Oct 2026",
    },
    {
        id: 2,
        name: "Mira Thomas",
        email: "mira@gmail.com",
        phone: "+91 9876543211",
        orders: 3,
        spent: 890,
        joined: "18 Oct 2026",
    },
    {
        id: 3,
        name: "Devika Nair",
        email: "devika@gmail.com",
        phone: "+91 9876543212",
        orders: 1,
        spent: 45,
        joined: "25 Oct 2026",
    },
    {
        id: 4,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        phone: "+91 9876543213",
        orders: 8,
        spent: 2450,
        joined: "02 Sep 2026",
    },
];

export default function CustomersPage() {
    const [query, setQuery] = useState("");

    const filteredCustomers = useMemo(() => {
        return customers.filter((customer) =>
            `${customer.name} ${customer.email} ${customer.phone}`
                .toLowerCase()
                .includes(query.toLowerCase())
        );
    }, [query]);

    const totalSpent = customers.reduce(
        (sum, customer) => sum + customer.spent,
        0
    );

    const returningCustomers = customers.filter(
        (customer) => customer.orders > 1
    ).length;

    return (
        <div className="admin-content">
            <header className="admin-topbar">
                <div>
                    <p className="admin-breadcrumb">
                        Workspace / Customers
                    </p>
                    <h1>Customer management</h1>
                </div>
            </header>

            <div className="admin-metric-grid">
                <article>
                    <span>Total customers</span>
                    <strong>{customers.length}</strong>
                    <Users size={22} />
                </article>

                <article>
                    <span>Returning customers</span>
                    <strong>{returningCustomers}</strong>
                    <UserCheck size={22} />
                </article>

                <article>
                    <span>Total customer spending</span>
                    <strong>₹{totalSpent}</strong>
                    <Wallet size={22} />
                </article>

                <article>
                    <span>Average spending</span>
                    <strong>
                        ₹{Math.round(totalSpent / customers.length)}
                    </strong>
                    <Wallet size={22} />
                </article>
            </div>

            <section className="admin-panel admin-products-panel">
                <div className="admin-panel-heading">
                    <div>
                        <p>Customer database</p>
                        <h2>All customers</h2>
                    </div>
                </div>

                <label className="admin-search">
                    <Search size={16} />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search customers..."
                    />
                </label>

                <div className="admin-table-wrap">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Phone</th>
                                <th>Total orders</th>
                                <th>Total spent</th>
                                <th>Joined date</th>
                                <th>Type</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredCustomers.map((customer) => (
                                <tr key={customer.id}>
                                    <td>
                                        <strong>{customer.name}</strong>
                                        <br />
                                        <small>{customer.email}</small>
                                    </td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.orders}</td>
                                    <td>₹{customer.spent}</td>
                                    <td>{customer.joined}</td>
                                    <td>
                                        <span className="admin-published">
                                            {customer.orders > 1 ? "Returning" : "New"}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredCustomers.length === 0 && (
                        <p>No customers found.</p>
                    )}
                </div>
            </section>
        </div>
    );
}
