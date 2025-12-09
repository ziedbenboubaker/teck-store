"use client";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div className="flex flex-col w-full">

            {/* --- Question 3.2: Bannière illustrant l’univers high-tech --- */}
            <div className="relative w-full h-[500px] bg-gray-900 overflow-hidden shadow-xl">

                {/* 1. The Image (Illustrating High-Tech) */}
                {/* Note: Make sure to put an image named 'tech-banner.jpg' in your public/images folder */}
                {/* We use standard <img> as allowed in exams to avoid next/image config issues */}
                <img
                    src="/images/tech-banner.jpg"
                    alt="Univers High-Tech"
                    className="w-full h-full object-cover opacity-50"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
                        Le Futur à Portée de Main
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 max-w-2xl drop-shadow-md text-gray-200">
                        Découvrez les dernières innovations technologiques aux meilleurs prix du marché.
                    </p>

                    {/* --- Question 3.2: Deux boutons --- */}
                    <div className="flex flex-col sm:flex-row gap-6">

                        {/* Bouton 1: Produits -> vers /produits */}
                        <button
                            onClick={() => router.push('/produits')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition transform hover:scale-105 shadow-lg border-2 border-transparent"
                        >
                            Voir nos Produits
                        </button>

                        {/* Bouton 2: S’inscrire -> vers /inscription */}
                        <button
                            onClick={() => router.push('/inscription')}
                            className="bg-transparent hover:bg-white hover:text-gray-900 text-white border-2 border-white px-8 py-4 rounded-full text-lg font-bold transition transform hover:scale-105 shadow-lg"
                        >
                            S'inscrire
                        </button>

                    </div>
                </div>
            </div>

            {/* Optional: Simple decorative section below to fill space */}
            <div className="py-16 container mx-auto text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Pourquoi choisir TechStore ?</h3>
                <p className="text-gray-600">Qualité premium, Support 24/7 et Livraison rapide.</p>
            </div>

        </div>
    );
}