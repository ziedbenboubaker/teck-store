"use client"; // Using client to use useRouter for buttons
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Banner */}
        <div className="w-full bg-gradient-to-r from-blue-900 to-blue-500 h-64 rounded-xl flex items-center justify-center shadow-lg text-white">
          <div className="text-center p-4">
            <h2 className="text-4xl font-bold mb-2">Bienvenue chez TechStore</h2>
            <p className="text-xl">Lunivers High-Tech à portée de clic.</p>
          </div>
        </div>

        {/* Action Buttons using router.push */}
        <div className="flex flex-col sm:flex-row gap-6">
          <button
              onClick={() => router.push('/produits')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            Produits
          </button>
          <button
              onClick={() => router.push('/inscription')}
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            Sinscrire
          </button>
        </div>
      </div>
  );
}