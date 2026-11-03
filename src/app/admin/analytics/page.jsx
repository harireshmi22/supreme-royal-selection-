"use client";

import Link from "next/link";
import { ArrowUpRight, BarChart3, Users, Wallet } from "lucide-react";

const orderValues = [
  { id: "SRS-1048", label: "03 Nov", value: 320 },
  { id: "SRS-1047", label: "02 Nov", value: 120 },
  { id: "SRS-1046", label: "01 Nov", value: 45 },
];

export default function AnalyticsPage() {
  const totalValue = orderValues.reduce((sum, order) => sum + order.value, 0);
  const highestOrder = Math.max(...orderValues.map((order) => order.value));

  return (
    <div className="admin-content">
      <header className="admin-topbar">
        <div className="admin-heading-block">
          <p className="admin-breadcrumb">Workspace / Analyze data</p>
          <h1>Read the recent signal.</h1>
          <p className="admin-lede">A compact view of the records currently in your workspace.</p>
        </div>
        <Link className="admin-quiet-link" href="/admin">Back to overview <ArrowUpRight size={15} /></Link>
      </header>

      <div className="admin-metric-grid admin-analysis-metrics">
        <article><span>Recorded order value</span><strong>₹{totalValue}</strong><small>Across 3 order records</small><Wallet size={20} /></article>
        <article><span>Largest order</span><strong>₹{highestOrder}</strong><small>Royal Gift Box</small><BarChart3 size={20} /></article>
        <article><span>Customer records</span><strong>4</strong><small>3 returning customers</small><Users size={20} /></article>
      </div>

      <section className="admin-panel admin-analysis-panel">
        <div className="admin-panel-heading">
          <div><p>Order value</p><h2>Current records</h2></div>
          <span className="admin-measured">INR · 03 rows</span>
        </div>
        <div className="admin-analysis-chart" aria-label="Order value by date">
          {orderValues.map((order) => (
            <div className="admin-analysis-column" key={order.id}>
              <strong>₹{order.value}</strong>
              <div style={{ height: `${Math.max((order.value / highestOrder) * 100, 14)}%` }} />
              <span>{order.label}</span>
            </div>
          ))}
        </div>
        <div className="admin-analysis-note">
          <span>Reading</span>
          <p>The 03 Nov order contributes the largest share of the current recorded value.</p>
        </div>
      </section>
    </div>
  );
}
