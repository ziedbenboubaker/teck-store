"use client";
import { useRouter } from 'next/navigation';

export default function BlogPostCard({ post }) {
    const router = useRouter();

    return (
        <div className="border rounded-lg shadow hover:shadow-md transition bg-white flex flex-col">
            <img src={post.image} alt={post.titre} className="h-48 w-full object-cover rounded-t-lg" />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{post.titre}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.extrait}</p>
                <div className="mt-auto">
                    <button
                        onClick={() => router.push(`/blog/${post.id}`)}
                        className="text-blue-600 font-bold hover:underline"
                    >
                        Lire plus &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
}