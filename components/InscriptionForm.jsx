"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const schema = yup.object({
    nom: yup.string().min(5, "Min 5 caractères").required("Requis"),
    cin: yup.string().matches(/^\d{8}$/, "Exactement 8 chiffres").required("Requis"),
    email: yup.string().email("Email valide requis").required("Requis"),
    password: yup.string().min(6, "Min 6 caractères").required("Requis"),
    confirmPassword: yup.string().oneOf([yup.ref('password')], "Les mots de passe ne correspondent pas"),
    terms: yup.boolean().oneOf([true], "Vous devez accepter les conditions").required()
});

export default function InscriptionForm() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
        alert("Inscription réussie !");
        router.push('/'); // Use router to redirect home after success
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto bg-white p-6 rounded shadow-lg border">
            <h2 className="text-2xl font-bold mb-4 text-center">Inscription</h2>

            <input {...register("nom")} placeholder="Nom" className="w-full border p-2 rounded" />
            <p className="text-red-500 text-xs">{errors.nom?.message}</p>

            <input {...register("cin")} placeholder="CIN" className="w-full border p-2 rounded" />
            <p className="text-red-500 text-xs">{errors.cin?.message}</p>

            <input {...register("email")} type="email" placeholder="Email" className="w-full border p-2 rounded" />
            <p className="text-red-500 text-xs">{errors.email?.message}</p>

            <input {...register("password")} type="password" placeholder="Mot de passe" className="w-full border p-2 rounded" />
            <p className="text-red-500 text-xs">{errors.password?.message}</p>

            <input {...register("confirmPassword")} type="password" placeholder="Confirmer mot de passe" className="w-full border p-2 rounded" />
            <p className="text-red-500 text-xs">{errors.confirmPassword?.message}</p>

            <div className="flex items-center gap-2">
                <input {...register("terms")} type="checkbox" id="terms" />
                <label htmlFor="terms" className="text-sm">Jaccepte les conditions</label>
            </div>
            <p className="text-red-500 text-xs">{errors.terms?.message}</p>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700">
                Sinscrire
            </button>
        </form>
    );
}