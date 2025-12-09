import ContactForm from '@/components/ContactForm';
import { Poppins } from 'next/font/google'; // Optional: ensure font consistency

export default function ContactPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 uppercase tracking-wide">
                Contactez TechStore
            </h2>

            {/* --- Question 3.4: Page en deux colonnes --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* --- Colonne 1 : Formulaire ContactForm --- */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold mb-6 text-blue-600">Envoyez-nous un message</h3>
                    <ContactForm />
                </div>

                {/* --- Colonne 2 : Informations de contact fictives --- */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-inner border border-gray-200 h-full">
                    <h3 className="text-xl font-bold mb-6 text-gray-800">Nos Coordonnées</h3>

                    <div className="space-y-6">
                        {/* Adresse */}
                        <div className="flex items-start gap-4">
                            <span className="text-2xl">📍</span>
                            <div>
                                <p className="font-bold text-gray-900">Adresse</p>
                                <p className="text-gray-600">
                                    CSFT Cité El Khadhra,<br />
                                    1003 Tunis, Tunisie
                                </p>
                            </div>
                        </div>

                        {/* Téléphone */}
                        <div className="flex items-start gap-4">
                            <span className="text-2xl">📞</span>
                            <div>
                                <p className="font-bold text-gray-900">Téléphone</p>
                                <p className="text-gray-600">+216 71 123 456</p>
                                <p className="text-xs text-gray-400">Lun-Ven: 8h - 17h</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <span className="text-2xl">✉️</span>
                            <div>
                                <p className="font-bold text-gray-900">Email</p>
                                <p className="text-gray-600">contact@techstore.tn</p>
                                <p className="text-gray-600">support@techstore.tn</p>
                            </div>
                        </div>

                        {/* Map Placeholder (Optional visual element) */}
                        <div className="mt-8 w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
                            [Carte Google Maps ici]
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}