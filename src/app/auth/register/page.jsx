"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, UserRoundPlus } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = { name: data.get("name"), email: data.get("email") };
    window.localStorage.setItem("srs-user", JSON.stringify(user));
    setNotice("Your SRS account is ready in this browser.");
  }

  return <main className="auth-page"><div className="auth-story"><Link href="/" className="auth-back"><ArrowLeft size={16} /> Back to SRS</Link><div><span className="auth-mark">SRS</span><h1>Make a ritual of it.</h1><p>Save your details for a more considered chocolate experience.</p></div><small>Small-batch chocolate from Kerala cacao</small></div><section className="auth-card"><div className="auth-card-top"><span className="auth-icon"><UserRoundPlus size={18} /></span><span>New member</span></div><h2>Join the collection.</h2><p className="auth-lede">Create your account in a few thoughtful steps.</p><form className="auth-form" onSubmit={handleSubmit}><label>Your name<input name="name" placeholder="Asha Kumar" required /></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label><label>Password<input name="password" type="password" placeholder="At least 6 characters" minLength="6" required /></label><button className="auth-submit" type="submit">Create account <ArrowUpRight size={16} /></button><span className="auth-notice" role="status">{notice}</span></form><p className="auth-switch">Already a member? <Link href="/auth/login">Sign in</Link></p></section></main>;
}
