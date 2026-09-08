import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata = {
    title: 'Page d\'accueil - Anima Terra : Spéléologie dans les Hautes-Alpes',
    description: 'Découvrez la spéléologie dans les Hautes-Alpes avec Anima Terra. Des sorties découverte, sportives et d\'envergure pour tous les niveaux.',
};

export default function Home() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-primary/90 z-10"></div>
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero-cave.jpg"
                        alt="Spéléologie dans les Hautes-Alpes"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-20 container mx-auto px-5 text-center">
                    <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-secondary mb-6">
                        Anima Terra
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto">
                        Spéléologie dans les Hautes-Alpes
                    </p>
                    <p className="text-lg text-secondary/90 mb-10 max-w-2xl mx-auto">
                        Explorez le monde souterrain avec nos sorties découverte, sportives et d'envergure
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/decouverte" variant="primary">
                            Découvrir nos sorties
                        </Button>
                        <Button href="/contact" variant="outline">
                            Nous contacter
                        </Button>
                    </div>
                </div>
            </section>

            {/* Nos Sorties Section */}
            <section className="py-20">
                <div className="container mx-auto px-5">
                    <h2 className="font-heading text-4xl md:text-5xl text-primary text-center mb-4">
                        Nos Sorties
                    </h2>
                    <p className="text-center text-text/80 mb-12 max-w-2xl mx-auto">
                        Choisissez la formule qui vous correspond, du débutant à l'expert
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Découverte */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-64">
                                <Image
                                    src="/images/decouverte-illustration.jpg"
                                    alt="Sortie Découverte"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-heading text-2xl text-primary mb-3">
                                    <Link href="/decouverte">Découverte</Link>
                                </h3>
                                <p className="text-text/80 mb-4">
                                    Idéales pour une première approche du monde souterrain et adaptées aux plus jeunes.
                                </p>
                                <ul className="text-sm text-text/70 mb-6 space-y-2">
                                    <li>✓ À partir de 6 ans</li>
                                    <li>✓ Durée : 2-3 heures</li>
                                    <li>✓ Niveau facile</li>
                                </ul>
                                <Button href="/decouverte" variant="primary" className="w-full">
                                    En savoir plus
                                </Button>
                            </div>
                        </div>

                        {/* Sportive */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-64">
                                <Image
                                    src="/images/sportive-illustration.jpg"
                                    alt="Sortie Sportive"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-heading text-2xl text-primary mb-3">
                                    <Link href="/sportive">Sportive</Link>
                                </h3>
                                <p className="text-text/80 mb-4">
                                    Pour les aventuriers en quête de sensations fortes et de défis techniques.
                                </p>
                                <ul className="text-sm text-text/70 mb-6 space-y-2">
                                    <li>✓ À partir de 12 ans</li>
                                    <li>✓ Durée : 4-6 heures</li>
                                    <li>✓ Niveau intermédiaire</li>
                                </ul>
                                <Button href="/sportive" variant="primary" className="w-full">
                                    En savoir plus
                                </Button>
                            </div>
                        </div>

                        {/* D'envergure */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-64">
                                <Image
                                    src="/images/denvergure-illustration.jpg"
                                    alt="Sortie D'envergure"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-heading text-2xl text-primary mb-3">
                                    <Link href="/denvergure">D'envergure</Link>
                                </h3>
                                <p className="text-text/80 mb-4">
                                    Des explorations exceptionnelles pour les spéléologues expérimentés.
                                </p>
                                <ul className="text-sm text-text/70 mb-6 space-y-2">
                                    <li>✓ Expérience requise</li>
                                    <li>✓ Durée : journée complète</li>
                                    <li>✓ Niveau avancé</li>
                                </ul>
                                <Button href="/denvergure" variant="primary" className="w-full">
                                    En savoir plus
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pourquoi Anima Terra */}
            <section className="bg-primary py-20">
                <div className="container mx-auto px-5">
                    <h2 className="font-heading text-4xl md:text-5xl text-secondary text-center mb-12">
                        Pourquoi choisir Anima Terra ?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl mb-4">🎓</div>
                            <h3 className="font-heading text-xl text-secondary mb-2">Expertise</h3>
                            <p className="text-secondary/80">
                                Guide diplômé d'État avec plus de 15 ans d'expérience
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">🛡️</div>
                            <h3 className="font-heading text-xl text-secondary mb-2">Sécurité</h3>
                            <p className="text-secondary/80">
                                Matériel professionnel et respect des normes de sécurité
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">🌍</div>
                            <h3 className="font-heading text-xl text-secondary mb-2">Nature</h3>
                            <p className="text-secondary/80">
                                Respect de l'environnement et des milieux souterrains
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">👥</div>
                            <h3 className="font-heading text-xl text-secondary mb-2">Convivialité</h3>
                            <p className="text-secondary/80">
                                Groupes limités pour une expérience personnalisée
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-5 text-center">
                    <h2 className="font-heading text-4xl md:text-5xl text-primary mb-6">
                        Prêt pour l'aventure ?
                    </h2>
                    <p className="text-xl text-text/80 mb-8 max-w-2xl mx-auto">
                        Réservez dès maintenant votre sortie spéléo ou offrez un bon cadeau
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/contact" variant="primary">
                            Réserver une sortie
                        </Button>
                        <Button href="/bon-cadeau" variant="secondary">
                            Bon cadeau
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
