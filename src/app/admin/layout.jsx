
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Box,
    ShoppingBag,
    Users,
    ChartNoAxesCombined,
    Settings,
    LogOut,
} from "lucide-react";

const navigation = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: Box },
    { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
    { name: "Customers", href: "/admin/customers", icon: Users },
    { name: "Analyze data", href: "/admin/analytics", icon: ChartNoAxesCombined },
    { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }) {
    const pathname = usePathname();

    return (
        <main className="admin-shell" data-lenis-prevent>
            {/* Fixed Sidebar */}
            <aside className="admin-sidebar">
                <Link href="/" className="admin-brand">
                    <span className="admin-brand-mark">SRS</span>
                    <span>
                        <strong>Supreme Royal</strong>
                        <small>Admin studio</small>
                    </span>
                </Link>

                <nav className="admin-nav">
                    {navigation.map((item) => {
                        const Icon = item.icon;

                        const active =
                            item.href === "/admin"
                                ? pathname === "/admin"
                                : pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={active ? "is-active" : ""}
                            >
                                <Icon size={17} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="admin-sidebar-footer">
                    <Link href="/profile">
                        <span className="admin-avatar">AK</span>
                        <span>
                            <strong>Admin account</strong>
                            <small>View profile</small>
                        </span>
                    </Link>

                    <Link href="/">
                        <LogOut size={17} />
                    </Link>
                </div>
            </aside>

            {/* Right Side Scrollable Content */}
            <section className="admin-main">
                {children}
            </section>
        </main>
    );
}
