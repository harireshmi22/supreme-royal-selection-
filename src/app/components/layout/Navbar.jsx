"use client";

import Link from "next/link";
import { ShoppingBag, Sparkles, UserRound } from "lucide-react";

export default function Navbar() {
    return (
        <header className="site-nav fixed top-0 left-0 w-full z-50
      backdrop-blur-md">

            <nav className="max-w-[1400px] mx-auto px-6 md:px-10
        h-[86px] flex items-center justify-between">

                <Link href="/" className="flex items-center gap-3">
                    <div className="site-nav-mark w-11 h-11 rounded-full
                    text-white flex
            items-center justify-center font-serif">
                        SRS
                    </div>

                    <div>
                        <p className="font-semibold text-sm">
                            Supreme Royal
                        </p>
                        <p className="site-nav-subtitle text-xs">
                            Selection
                        </p>
                    </div>
                </Link>

                <div className="site-nav-links hidden md:flex gap-10
          text-sm">
                    <a href="#craft">Our process</a>
                    <a href="#gifting">Gifting</a>
                    <Link href="/collection">Collection</Link>
                </div>

                <div className="flex gap-3">
                    <Link
                        href="/auth/login"
                        aria-label="Open account"
                        className="site-nav-account hidden sm:flex items-center justify-center
            w-11 h-11 rounded-full border"
                    >
                        <UserRound size={16} />
                    </Link>

                    <a href="#ingredients"
                        className="site-nav-ingredients hidden sm:flex items-center gap-2
            px-5 py-3 rounded-full border">
                        <Sparkles size={16} />
                        Ingredients
                    </a>

                    <Link href="/cart"
                        className="flex items-center gap-2
            px-5 py-3 rounded-full
            site-nav-order text-white">
                        <ShoppingBag size={16} />
                        Order now
                    </Link>
                </div>

            </nav>
        </header>
    );
}