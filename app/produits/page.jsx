import { Suspense } from 'react';
import ProductSearch from '@/components/ProduitSearch';

export default function ProduitsPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Nos Produits</h2>

            {/*
        The Suspense boundary is still REQUIRED here to fix the Netlify error.
        It protects the server build from the useSearchParams inside ProductSearch.
      */}
            <Suspense fallback={<div className="p-4 text-center">Chargement des produits...</div>}>
                <ProductSearch />
            </Suspense>
        </div>
    );
}