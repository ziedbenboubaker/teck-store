import React from 'react';

export default function Header() {
    return (
        <header className="bg-white py-6 shadow-sm border-b border-gray-100 relative">
            <div className="container mx-auto flex flex-col items-center justify-center relative">

                {/* 1. Name of the site (Centered, 3xl, Poppins) */}
                {/* Note: The Poppins font is loaded in layout.jsx, so it applies here automatically */}
                <h1 className="text-3xl font-bold text-gray-900 tracking-wider">
                    TechStore
                </h1>

                {/* 2. Element of your choice (I chose a Slogan/Mini-banner) */}
                <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest">
                    High-Tech & Innovation
                </p>

                {/* EXTRA ELEMENT (As per requirements): Service Client Badge (Absolute positioned for desktop) */}
                <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col items-end">
                    <span className="text-xs text-gray-400">Service Client 24/7</span>
                    <span className="font-bold text-blue-600">📞 71 000 000</span>
                </div>

            </div>
        </header>
    );
}