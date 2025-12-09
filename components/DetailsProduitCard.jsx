"use client";

export default function DetailsProduitCard({ produit }) {
    return (
        <div className="max-w-4xl mx-auto bg-white border rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gray-100">
                <img src={produit.image} alt={produit.nom} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <span className="text-blue-600 font-bold">{produit.categorie}</span>
                <h1 className="text-3xl font-bold mb-4">{produit.nom}</h1>
                <p className="text-gray-600 mb-6">{produit.description}</p>
                <div className="text-3xl font-bold mb-6">{produit.prix} DT</div>
                <button
                    onClick={() => alert("Commande confirmée")}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition"
                >
                    Acheter
                </button>
            </div>
        </div>
    );
}