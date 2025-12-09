"use client"; // This component handles the interactivity
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { produits } from '@/data/produits';
import ProduitList from './ProduitList';

export default function ProduitSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const initialQuery = searchParams.get('q') || "";
    const [searchTerm, setSearchTerm] = useState(initialQuery);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Update URL without reloading the page
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
        <>
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
        </>
    );
}