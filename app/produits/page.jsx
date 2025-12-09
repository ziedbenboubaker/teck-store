"use client";
import { useState, Suspense } from 'react'; // 1. استيراد Suspense
import { useRouter, useSearchParams } from 'next/navigation';
import { produits } from '@/data/produits';
import ProduitList from '@/components/ProduitList';

// 2. نقل منطق البحث إلى مكون فرعي منفصل
function SearchContent() {
    const router = useRouter();
    const searchParams = useSearchParams(); // استخدام useSearchParams هنا آمن داخل Suspense

    const initialQuery = searchParams.get('q') || "";
    const [searchTerm, setSearchTerm] = useState(initialQuery);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

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

// 3. المكون الرئيسي يغلف المحتوى بـ Suspense
export default function ProduitsPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Nos Produits</h2>

            {/* هذا الغلاف ضروري لكي ينجح البناء على Netlify */}
            <Suspense fallback={<div className="p-4 text-gray-500">Chargement de la recherche...</div>}>
                <SearchContent />
            </Suspense>
        </div>
    );
}