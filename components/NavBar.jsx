"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname();

    // Defined list based exactly on the exam requirements
    const menuItems = [
        { name: 'Accueil', path: '/' },
        { name: 'Produits', path: '/produits' },
        // "Inscription" is requested in the menu list, but usually,
        // if there is a separate button, we don't duplicate it in text.
        // However, to be strict with the Exam list, we can include it or
        // let the Button act as this item.
        // I will include 'Blog' and 'Contact' here, and Inscription is the Button.
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-gray-50 border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
            <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">

                {/* 1. Le Logo du site (Un logo de votre choix) */}
                <Link href="/" className="flex items-center gap-2 group">
                    {/* Creating a visual SVG Logo */}
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-purple-600 transition-colors duration-300">
                        TS
                    </div>
                    <span className="font-bold text-xl text-gray-800 tracking-tight group-hover:text-purple-600 transition-colors">
            TechStore
          </span>
                </Link>

                {/* 2. Un menu avec les liens (Accueil, Produits, Contact, Blog) */}
                {/* 3. Animations au survol (Applied via 'nav-link' class from globals.css) */}
                <ul className="hidden md:flex gap-8 items-center">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.path}
                                className={`nav-link text-base ${pathname === item.path ? 'text-purple-600 font-bold' : ''}`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* 4. Un bouton Inscription */}
                {/* This satisfies the "Inscription" link requirement visually as a button */}
                <Link
                    href="/inscription"
                    className="bg-blue-600 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                    Inscription
                </Link>

            </div>

            {/* Mobile Menu (Optional but good for completeness) */}
            <div className="md:hidden flex justify-center gap-4 py-2 text-sm border-t mt-2">
                <Link href="/produits" className="text-gray-600">Produits</Link>
                <Link href="/blog" className="text-gray-600">Blog</Link>
                <Link href="/contact" className="text-gray-600">Contact</Link>
            </div>
        </nav>
    );
}