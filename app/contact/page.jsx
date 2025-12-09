import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
    return (
        <div className="py-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Contactez-nous</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Envoyez-nous un message</h3>
                    <ContactForm />
                </div>
                <div className="bg-gray-100 p-6 rounded-lg h-fit">
                    <h3 className="text-xl font-semibold mb-4">Informations</h3>
                    <p>Email : contact@techstore.tn</p>
                </div>
            </div>
        </div>
    );
}