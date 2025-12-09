"use client"; // Must be client for hooks
import { useParams, useRouter } from 'next/navigation'; // HOOKS HERE
import { blogPosts } from '@/data/blogPosts';

export default function BlogPostPage() {
    const params = useParams(); // useParams hook
    const router = useRouter(); // useRouter hook

    const id = params.id;
    const post = blogPosts.find(p => p.id === parseInt(id));

    if (!post) return <div>Article non trouvé</div>;

    return (
        <div className="max-w-3xl mx-auto py-8">
            <button
                onClick={() => router.push('/blog')}
                className="text-blue-600 hover:underline mb-4 inline-block"
            >
                &larr; Retour au blog
            </button>

            <article className="bg-white p-6 rounded-lg shadow-sm border">
                <h1 className="text-3xl font-bold mb-4">{post.titre}</h1>
                <div className="text-gray-500 text-sm mb-6">Publié le {post.date}</div>
                <img src={post.image} alt={post.titre} className="w-full h-64 object-cover rounded mb-6" />
                <div className="prose max-w-none text-gray-800 leading-relaxed">
                    {post.contenu}
                </div>
            </article>
        </div>
    );
}