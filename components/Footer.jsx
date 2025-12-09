import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>TechStore &copy; 2025</p>
                <Link href="/contact" className="hover:underline text-blue-300">Contactez-nous</Link>
                <div className="flex gap-4">
                    <span>Facebook</span>
                    <span>Instagram</span>
                    <span>LinkedIn</span>
                </div>
            </div>
        </footer>
    );
}