"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().min(4, "Min 4 caractères").required("Requis"),
    email: yup.string().email("Email invalide").required("Requis"),
    telephone: yup.string().matches(/^\d{8}$/, "Exactement 8 chiffres").required("Requis"),
    message: yup.string().max(30, "Max 30 caractères").required("Requis"),
});

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
        alert("Message envoyé !");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-gray-50 p-6 rounded shadow">
            {/* Fields */}
            <input {...register("name")} placeholder="Nom" className="w-full border p-2 rounded" />
            <p className="text-red-500 text-xs">{errors.name?.message}</p>

            <input {...register("email")} placeholder="Email" className="w-full border p-2 rounded" />
            <p className="text-red-500 text-xs">{errors.email?.message}</p>

            <input {...register("telephone")} placeholder="Téléphone" className="w-full border p-2 rounded" />
            <p className="text-red-500 text-xs">{errors.telephone?.message}</p>

            <textarea {...register("message")} placeholder="Message" className="w-full border p-2 rounded"></textarea>
            <p className="text-red-500 text-xs">{errors.message?.message}</p>

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">Envoyer</button>
        </form>
    );
}