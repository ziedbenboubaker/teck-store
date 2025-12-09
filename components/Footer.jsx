import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Requirement 1: « TechStore © 2025 » (Exact Text) */}
                    <div className="text-lg font-semibold tracking-wide">
                        TechStore © 2025
                    </div>

                    {/* Requirement 2: Un lien « Contactez-nous » */}
                    <div>
                        <Link
                            href="/contact"
                            className="text-gray-300 hover:text-white hover:underline transition-all duration-300"
                        >
                            Contactez-nous
                        </Link>
                    </div>

                    {/* Requirement 3: Des liens vers des réseaux sociaux */}
                    <div className="flex gap-4 items-center">
                        {/* Facebook */}
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors duration-300 font-medium"
                        >
                            Facebook
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition-colors duration-300 font-medium"
                        >
                            Instagram
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors duration-300 font-medium"
                        >
                            LinkedIn
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}