"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation Schema (Question 3.4)
const schema = yup.object({
    name: yup.string()
        .min(4, "Le nom doit contenir au moins 4 caractères")
        .required("Le nom est requis"),
    email: yup.string()
        .email("Format d'email invalide")
        .required("L'email est requis"),
    telephone: yup.string()
        .matches(/^\d{8}$/, "Le téléphone doit contenir exactement 8 chiffres")
        .required("Le téléphone est requis"),
    message: yup.string()
        .max(30, "Le message ne doit pas dépasser 30 caractères") // Strict Exam Rule
        .required("Le message est requis"),
});

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
        alert("Votre message a été envoyé avec succès !");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input
                    {...register("name")}
                    type="text"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Votre nom"
                />
                <p className="text-red-500 text-xs mt-1 h-4">{errors.name?.message}</p>
            </div>

            {/* Email Field */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    {...register("email")}
                    type="email"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="exemple@email.com"
                />
                <p className="text-red-500 text-xs mt-1 h-4">{errors.email?.message}</p>
            </div>

            {/* Phone Field */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                <input
                    {...register("telephone")}
                    type="text"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="12345678"
                />
                <p className="text-red-500 text-xs mt-1 h-4">{errors.telephone?.message}</p>
            </div>

            {/* Message Field */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                    {...register("message")}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition h-32 resize-none"
                    placeholder="Votre message (max 30 carac.)"
                ></textarea>
                <div className="flex justify-between mt-1">
                    <p className="text-red-500 text-xs h-4">{errors.message?.message}</p>
                    <span className="text-xs text-gray-400">Max 30 caractères</span>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow transition duration-300 transform hover:scale-[1.02]"
            >
                Envoyer le message
            </button>
        </form>
    );
}