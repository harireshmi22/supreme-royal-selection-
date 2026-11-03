"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChevronRight, LogOut, Package, UserRound } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(() => {
    if (typeof window === "undefined") return { name: "SRS member", email: "hello@srs-selection.in" };
    const stored = window.localStorage.getItem("srs-user");
    if (!stored) return { name: "SRS member", email: "hello@srs-selection.in" };
    try {
      return JSON.parse(stored);
    } catch {
      window.localStorage.removeItem("srs-user");
      return { name: "SRS member", email: "hello@srs-selection.in" };
    }
  });
  const [saved, setSaved] = useState("");

  function saveProfile(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextUser = { name: data.get("name"), email: data.get("email") };
    setUser(nextUser);
    window.localStorage.setItem("srs-user", JSON.stringify(nextUser));
    setSaved("Profile details saved.");
  }

  function signOut() {
    window.localStorage.removeItem("srs-user");
    setUser({ name: "SRS member", email: "hello@srs-selection.in" });
    setSaved("You have been signed out on this browser.");
  }

  return <main className="profile-page"><header className="profile-topbar"><Link href="/" className="auth-back"><ArrowLeft size={16} /> Back to storefront</Link><Link href="/collection" className="profile-collection-link">Browse collection <ArrowUpRight size={15} /></Link></header><section className="profile-layout"><aside className="profile-intro"><span className="profile-avatar">{user.name.slice(0, 2).toUpperCase()}</span><h1>{user.name}</h1><p>Keep your delivery details and SRS orders together.</p><nav><a className="profile-nav-active" href="#details"><UserRound size={16} /> Personal details</a><a href="#orders"><Package size={16} /> Order history</a><button type="button" onClick={signOut}><LogOut size={16} /> Sign out</button></nav></aside><div className="profile-content"><section className="profile-card" id="details"><div className="profile-card-heading"><div><p>Personal details</p><h2>Your information</h2></div><span>Private to your account</span></div><form className="profile-form" onSubmit={saveProfile}><label>Full name<input name="name" defaultValue={user.name} key={user.name} required /></label><label>Email address<input name="email" type="email" defaultValue={user.email} key={user.email} required /></label><label>Delivery note<textarea name="note" rows="3" placeholder="Add a note for your next order." /></label><div className="profile-save-row"><span role="status">{saved}</span><button className="admin-primary-button" type="submit">Save changes <ArrowUpRight size={15} /></button></div></form></section><section className="profile-card" id="orders"><div className="profile-card-heading"><div><p>Order history</p><h2>Recent rituals</h2></div><a href="/collection">Shop again <ChevronRight size={15} /></a></div><div className="profile-history"><article><span>12 May 2026</span><strong>Royal Gift Box</strong><b>₹320</b><em>Delivered</em></article><article><span>04 May 2026</span><strong>Choco Grain × 2</strong><b>₹90</b><em>Delivered</em></article></div></section></div></section></main>;
}
