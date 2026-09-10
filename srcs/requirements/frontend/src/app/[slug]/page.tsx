"use client";

import Image from 'next/image';
import Link from 'next/link';
import {useParams} from 'next/navigation';
import {useState} from 'react';
import {useSorties} from "@/services/get.service";
import {ClockIcon, EuroIcon, PersonIcon, PinIcon, WalkIcon} from "@/components/Icons";
import SmallText from "@/components/SmallText";
import {iSortie} from "@/types/api";

const DUREE_LABELS: Record<string, string> = {
    'demi-journee': 'Demi-journée',
    'journee': 'Journée',
};

export default function SortieCategoriePage() {
    const {slug} = useParams<{slug: string}>();
    const {data: categories, isLoading} = useSorties();
    const categorie = categories?.find((c) => c.slug === slug);

    if (isLoading) return (<div className="py-32 text-center"><SmallText>Chargement...</SmallText></div>);

    if (!categorie) {
        return (<div className="py-32 text-center">
            <h1 className="text-brown mb-4">Page introuvable</h1>
            <p className="text-black/70 mb-8">Cette catégorie de sortie n&apos;existe pas ou plus.</p>
            <Link href="/" className="inline-block bg-brown text-beige font-semibold px-8 py-3 rounded-full hover:bg-orange hover:text-brown transition-colors duration-200">
                Retour à l&apos;accueil
            </Link>
        </div>);
    }

    return (<div className="py-16">
        <div className="container mx-auto px-5 text-center mb-12">
            <h1 className="text-brown mb-8">{categorie.name}</h1>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-black/60 text-sm">
                <span className="flex items-center gap-2"><PinIcon color="black" size={16}/> Lieu de RDV</span>
                <span className="flex items-center gap-2"><ClockIcon color="black" size={16}/> Durée de l&apos;activité</span>
                <span className="flex items-center gap-2"><WalkIcon color="black" size={16}/> Temps marche d&apos;approche</span>
            </div>
        </div>

        <div className="container mx-auto px-5 flex flex-col gap-10">
            {categorie.sorties.map((s) => (<SortieCard key={s.id} sortie={s}/>))}
            {categorie.sorties.length === 0 && <SmallText>Aucune sortie disponible pour le moment</SmallText>}
        </div>

        <div className="container mx-auto px-5 mt-16 text-center italic text-black/70 space-y-2 max-w-2xl">
            <p>Tarif valable à partir de 3 personnes. Pour les groupes de 1 à 2 personnes, un minimum de 3 places est facturé, sauf s&apos;il existe une possibilité de vous intégrer à un autre groupe.</p>
            <p>Contactez-moi pour connaître les possibilités de regroupement.</p>
        </div>
    </div>);
}

function SortieCard({sortie}: {sortie: iSortie}) {
    return (<div className="flex flex-col md:flex-row">
        <ImageCarousel images={sortie.images} alt={sortie.titre}/>
        <div className="flex-1 bg-beige flex flex-col justify-between gap-6 p-8 md:p-10">
            <div>
                <h3 className="text-brown mb-4">{sortie.titre}</h3>
                <p className="text-black/80">{sortie.description}</p>
            </div>
            <div>
                <div className="border-t border-brown/30 mb-6"/>
                <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6 text-black/80 text-sm">
                    <span className="flex items-center gap-2"><PinIcon color="brown" size={16}/> {sortie.lieu}</span>
                    <span className="flex items-center gap-2"><ClockIcon color="brown" size={16}/> {DUREE_LABELS[sortie.duree] ?? sortie.duree}</span>
                    <span className="flex items-center gap-2"><WalkIcon color="brown" size={16}/> {sortie.temps_marche_approche} min</span>
                    <span className="flex items-center gap-2"><PersonIcon color="brown" size={16}/> À partir de {sortie.age_minimum} ans</span>
                    <span className="flex items-center gap-2"><EuroIcon color="brown" size={16}/> {sortie.prix}€ /Personne</span>
                </div>
                <Link href="/contact" className="inline-block bg-brown text-beige font-semibold px-8 py-3 rounded-full hover:bg-orange hover:text-brown transition-colors duration-200">
                    Réserver
                </Link>
            </div>
        </div>
    </div>);
}

function ImageCarousel({images, alt}: {images: string[], alt: string}) {
    const [index, setIndex] = useState(0);

    if (images.length === 0) {
        return <div className="relative w-full md:w-1/2 h-72 md:h-auto bg-brown/10"/>;
    }

    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
    const next = () => setIndex((i) => (i + 1) % images.length);

    return (<div className="relative w-full md:w-1/2 h-72 md:h-auto overflow-hidden">
        <Image className="object-cover" src={images[index]} alt={alt} fill/>
        {images.length > 1 && <>
            <button onClick={prev} aria-label="Image précédente" className="absolute left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-3xl cursor-pointer">‹</button>
            <button onClick={next} aria-label="Image suivante" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-3xl cursor-pointer">›</button>
        </>}
    </div>);
}
