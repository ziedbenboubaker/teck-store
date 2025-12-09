import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata = {
    title: "TechStore – High-Tech & Innovation",
    description: "Découvrez les meilleurs produits technologiques au meilleur prix.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
        <body className={`${poppins.variable} font-poppins flex flex-col min-h-screen`}>
        <Header />
        <NavBar />
        <main className="flex-grow container mx-auto px-4 py-6">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}