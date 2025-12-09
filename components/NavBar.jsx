"use client"; // Client component needed if we were using usePathname for active links
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname(); // Example of a hook in Nav
    const Route = ['/', '/produits', '/contact', '/blog']
    
    return (
        <nav className="bg-gray-100 border-b border-gray-200">
            <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
                <div className="text-xl font-bold text-blue-600">
                    <Link href="/">TechStore</Link>
                </div>

                <ul className="flex gap-6 items-center">
                    {Route.map((path) => (
                        <li key={path}>
                            <Link
                                href={path}
                                className={`nav-link font-medium ${pathname === path ? 'text-blue-600' : 'text-gray-700'}`}
                            >
                                {path === '/' ? 'Accueil' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link href="/inscription" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition">
                    Inscription
                </Link>
            </div>
        </nav>
    );
}