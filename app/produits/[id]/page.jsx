"use client"; // Must be client to use useParams hook directly
import { useParams, useRouter } from 'next/navigation'; // HOOKS HERE
import { produits } from '@/data/produits';
import DetailsProduitCard from '@/components/DetailsProduitCard';

export default function ProductDetailsPage() {
    const params = useParams(); // useParams() hook
    const router = useRouter(); // useNavigation equivalent

    const id = params.id;
    const produit = produits.find(p => p.id === parseInt(id));

    if (!produit) {
        return <div className="p-4">Produit non trouvé</div>;
    }

    return (
        <div className="py-8">
            <button
                onClick={() => router.back()}
                className="mb-4 text-gray-600 hover:text-black"
            >
                &larr; Retour
            </button>
            <DetailsProduitCard produit={produit} />
        </div>
    );
}