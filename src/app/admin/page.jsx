"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ChartNoAxesCombined,
  CirclePlus,
  PackageCheck,
  ShoppingBag,
  Users,
} from "lucide-react";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <div className="admin-content">
      <header className="admin-topbar">
        <div className="admin-heading-block">
          <p className="admin-breadcrumb">
            Workspace / Overview
          </p>
          <h1>Good morning, admin.</h1>
          <p className="admin-lede">
            A clear view of your catalogue, orders, and customer activity.
          </p>
        </div>
        <div className="admin-top-actions">
          <span className="admin-live-status">
            <i />
            Store workspace
          </span>
          <Link className="admin-primary-button" href="/admin/analytics">
            <ChartNoAxesCombined size={16} />
            Analyze data
          </Link>
        </div>
      </header>

      <div className="admin-metric-grid">
        <article>
          <span>Catalogue</span>
          <strong>{products.length}</strong>
          <small>Published products</small>
          <PackageCheck size={20} />
        </article>
        <article>
          <span>Orders</span>
          <strong>3</strong>
          <small>Current order records</small>
          <ShoppingBag size={20} />
        </article>
        <article>
          <span>Customers</span>
          <strong>4</strong>
          <small>Customer records</small>
          <Users size={20} />
        </article>
        <article>
          <span>Order value</span>
          <strong>₹485</strong>
          <small>Across current orders</small>
          <ArrowUpRight size={20} />
        </article>
      </div>

      <div className="admin-work-grid">
        <section className="admin-panel admin-panel-lead">
          <div className="admin-panel-heading">
            <div>
              <p>Signal</p>
              <h2>See what needs attention.</h2>
            </div>
            <span className="admin-measured">03 records</span>
          </div>
          <div className="admin-summary-list">
            <div>
              <span className="admin-summary-index">01</span>
              <p><strong>Processing orders</strong><small>One order is waiting to move forward.</small></p>
              <Link href="/admin/orders" aria-label="Review processing orders"><ArrowUpRight size={18} /></Link>
            </div>
            <div>
              <span className="admin-summary-index">02</span>
              <p><strong>Most valuable customer</strong><small>Rahul Sharma has spent ₹2,450.</small></p>
              <Link href="/admin/customers" aria-label="View customers"><ArrowUpRight size={18} /></Link>
            </div>
            <div>
              <span className="admin-summary-index">03</span>
              <p><strong>Catalogue ready</strong><small>{products.length} products are published for sale.</small></p>
              <Link href="/admin/products" aria-label="View products"><ArrowUpRight size={18} /></Link>
            </div>
          </div>
        </section>

        <section className="admin-panel admin-panel-action">
          <div className="admin-panel-heading">
            <div>
              <p>Quick action</p>
              <h2>Keep the shelf current.</h2>
            </div>
            <CirclePlus size={20} />
          </div>
          <p className="admin-panel-copy">Review the catalogue, then use analysis to understand which records deserve a closer look.</p>
          <div className="admin-action-links">
            <Link href="/admin/products">Manage products <ArrowUpRight size={16} /></Link>
            <Link href="/admin/analytics">Open analysis <ArrowUpRight size={16} /></Link>
          </div>
        </section>
      </div>
    </div>
  );
}