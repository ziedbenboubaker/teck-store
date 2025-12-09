import React from 'react';

export default function Header() {
    return (
        <header className="bg-white py-4 shadow-sm">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-center">TechStore</h1>
                <p className="text-sm text-gray-500 mt-1">Linnovation au meilleur prix</p>
            </div>
        </header>
    );
}