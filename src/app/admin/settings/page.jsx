
"use client";

import { useState } from "react";
import {
    Store,
    Save,
    Bell,
    ShieldCheck,
    MapPin,
} from "lucide-react";

const initialSettings = {
    storeName: "Supreme Royal",
    email: "",
    phone: "",
    address: "",
    fssai: "",
    currency: "INR",
    notifications: true,
};

export default function SettingsPage() {
    const [settings, setSettings] = useState(initialSettings);
    const [notice, setNotice] = useState("");

    function updateField(e) {
        const { name, value, type, checked } = e.target;

        setSettings((current) => ({
            ...current,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    function saveSettings(e) {
        e.preventDefault();

        localStorage.setItem(
            "srs-store-settings",
            JSON.stringify(settings)
        );

        setNotice("Settings saved successfully.");
    }

    return (
        <div className="admin-content">
            <header className="admin-topbar">
                <div className="admin-heading-block">
                    <p className="admin-breadcrumb">
                        Workspace / Settings
                    </p>
                    <h1>Store settings</h1>
                    <p className="admin-lede">
                        Keep the details behind your storefront accurate and ready.
                    </p>
                </div>
            </header>

            <form onSubmit={saveSettings}>
                {/* Store Information */}
                <section className="admin-panel admin-add-panel">
                    <div className="admin-add-copy">
                        <Store size={24} />
                        <h2>Store information</h2>
                        <span>
                            Manage your chocolate store&apos;s basic information.
                        </span>
                    </div>

                    <div className="admin-product-form">
                        <label>
                            Store name
                            <input
                                name="storeName"
                                value={settings.storeName}
                                onChange={updateField}
                                required
                            />
                        </label>

                        <label>
                            Business email
                            <input
                                name="email"
                                type="email"
                                value={settings.email}
                                onChange={updateField}
                                placeholder="business@example.com"
                            />
                        </label>

                        <label>
                            Contact number
                            <input
                                name="phone"
                                value={settings.phone}
                                onChange={updateField}
                                placeholder="+91 XXXXX XXXXX"
                            />
                        </label>

                        <label>
                            Currency
                            <select
                                name="currency"
                                value={settings.currency}
                                onChange={updateField}
                            >
                                <option value="INR">INR - Indian Rupee</option>
                            </select>
                        </label>

                        <label className="form-wide">
                            Business address
                            <textarea
                                name="address"
                                value={settings.address}
                                onChange={updateField}
                                rows="3"
                                placeholder="Enter your business address"
                            />
                        </label>
                    </div>
                </section>

                {/* Food License */}
                <section className="admin-panel admin-add-panel">
                    <div className="admin-add-copy">
                        <ShieldCheck size={24} />
                        <h2>Food licence details</h2>
                        <span>
                            Manage your FSSAI registration information.
                        </span>
                    </div>

                    <div className="admin-product-form">
                        <label className="form-wide">
                            FSSAI licence / registration number
                            <input
                                name="fssai"
                                value={settings.fssai}
                                onChange={updateField}
                                placeholder="Enter your FSSAI number"
                            />
                        </label>
                    </div>
                </section>

                {/* Notifications */}
                <section className="admin-panel admin-add-panel">
                    <div className="admin-add-copy">
                        <Bell size={24} />
                        <h2>Notifications</h2>
                        <span>
                            Manage your store notification preferences.
                        </span>
                    </div>

                    <label>
                        <input
                            type="checkbox"
                            name="notifications"
                            checked={settings.notifications}
                            onChange={updateField}
                        />
                        Enable order notifications
                    </label>
                </section>

                {/* Save */}
                <div className="admin-form-footer">
                    <span role="status">{notice}</span>

                    <button
                        type="submit"
                        className="admin-primary-button"
                    >
                        <Save size={16} />
                        Save settings
                    </button>
                </div>
            </form>
        </div>
    );
}
