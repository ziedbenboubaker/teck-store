"use client";
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { produits } from '@/data/produits';
import ProduitList from '@/components/ProduitList';

export default function ProduitsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // 1. Initialize state from URL param 'q' (useSearchQuery equivalent)
    const initialQuery = searchParams.get('q') || "";
    const [searchTerm, setSearchTerm] = useState(initialQuery);

    // 2. Sync URL when typing (Real-time update)
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Update URL query param without refreshing
        if (value) {
            router.replace(`/produits?q=${value}`);
        } else {
            router.replace('/produits');
        }
    };

    const filteredProduits = produits.filter(p =>
        p.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Nos Produits</h2>
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Rechercher un produit..."
                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <ProduitList produits={filteredProduits} />
            {filteredProduits.length === 0 && (
                <p className="text-gray-500 mt-4">Aucun produit trouvé.</p>
            )}
        </div>
    );
}