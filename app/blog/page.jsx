import { blogPosts } from '@/data/blogPosts';
import BlogPostCard from '@/components/BlogPostCard';

export default function BlogPage() {
    return (
        <div className="py-8">
            <h2 className="text-3xl font-bold mb-8 border-b pb-2">Blog High-Tech</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}