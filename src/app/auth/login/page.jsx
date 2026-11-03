"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, LockKeyhole } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    window.localStorage.setItem("srs-user", JSON.stringify({ name: "SRS member", email }));
    setNotice("You are signed in for this browser.");
  }

  return <main className="auth-page"><div className="auth-story"><Link href="/" className="auth-back"><ArrowLeft size={16} /> Back to SRS</Link><div><span className="auth-mark">SRS</span><h1>A slower kind of sweet.</h1><p>Your collection, orders, and favourite rituals in one place.</p></div><small>Supreme Royal Selection · Kerala cacao</small></div><section className="auth-card"><div className="auth-card-top"><span className="auth-icon"><LockKeyhole size={18} /></span><span>Member access</span></div><h2>Welcome back.</h2><p className="auth-lede">Sign in to keep your SRS moments close.</p><form className="auth-form" onSubmit={handleSubmit}><label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label><label>Password<input name="password" type="password" placeholder="••••••••" minLength="6" required /></label><div className="auth-form-row"><label className="auth-check"><input type="checkbox" /> Remember me</label><a href="#forgot">Forgot password?</a></div><button className="auth-submit" type="submit">Sign in <ArrowUpRight size={16} /></button><span className="auth-notice" role="status">{notice}</span></form><p className="auth-switch">New to SRS? <Link href="/auth/register">Create an account</Link></p></section></main>;
}
