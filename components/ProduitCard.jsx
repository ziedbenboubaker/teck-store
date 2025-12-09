"use client";
import { useRouter } from 'next/navigation';

export default function ProduitCard({ produit }) {
    const router = useRouter(); // Using useRouter instead of Link for demonstration

    return (
        <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-white flex flex-col h-full">
            <div className="h-48 bg-gray-200 relative">
                <img src={produit.image} alt={produit.nom} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex-grow flex flex-col">
                <div className="text-xs text-blue-600 font-bold uppercase mb-1">{produit.categorie}</div>
                <h3 className="text-lg font-bold mb-2">{produit.nom}</h3>
                <p className="text-gray-700 font-bold text-xl mb-4">{produit.prix} DT</p>

                {/* Using standard button + useRouter hook */}
                <button
                    onClick={() => router.push(`/produits/${produit.id}`)}
                    className="mt-auto block w-full text-center bg-gray-900 text-white py-2 rounded hover:bg-gray-700 transition"
                >
                    Voir Détails
                </button>
            </div>
        </div>
    );
}