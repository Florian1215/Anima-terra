"use client";

import Image from 'next/image';
import {redirect, useParams} from 'next/navigation';
import React, {useState} from 'react';
import {useSorties} from "@/services/get.service";
import {ChevronIcon, ClockIcon, EuroIcon, PersonIcon, PinIcon, WalkIcon} from "@/components/Icons";
import SmallText from "@/components/SmallText";
import Button, {TextButton} from "@/components/Buttons";
import {iSortie} from "@/types/api";

const DUREE_LABELS: Record<string, string> = {
    'demi-journee': 'Demi-journée',
    'journee': 'Journée',
};

const STATUS_BADGE: Partial<Record<iSortie["status"], {label: string, className: string}>> = {
    'temporairement-indisponible': {label: 'Temporairement indisponible', className: 'bg-red text-white'},
    'prochainement-disponible': {label: 'Prochainement disponible', className: 'bg-orange text-brown'},
};

export default function SortieCategorie() {
    const {slug} = useParams<{slug: string}>();
    const {data: categories, isLoading} = useSorties();
    const categorie = categories?.find((c) => c.slug === slug);

    if (isLoading)
        return (<div className="nav-offset py-32 text-center"><SmallText>Chargement...</SmallText></div>);

    if (!categorie)
        redirect("/");

    return (<div className="nav-offset py-12 sm:py-16">
        <div className="container mx-auto px-5 text-center mb-12">
            <h1 className="text-brown mb-8">{categorie.name}</h1>
        </div>

        <div className="container mx-auto px-5 flex flex-col gap-6 sm:gap-10">
            {categorie.sorties.map((s) => (<SortieCard key={s.id} sortie={s}/>))}
            {categorie.sorties.length === 0 && <SmallText>Aucune sortie disponible pour le moment</SmallText>}
        </div>

        <div className="container mx-auto px-12 sm:px-16 mt-12 sm:mt-16 text-center italic text-brown max-w-5xl">
            <p>Tarif valable à partir de 3 personnes. Pour les groupes de 1 à 2 personnes, un minimum de 3 places est facturé, sauf s&apos;il existe une possibilité de vous intégrer à un autre groupe. <TextButton href={"/contact"} raison="Demande de réservation">Contactez-moi</TextButton> pour connaître les possibilités de regroupement.</p>
        </div>
    </div>);
}

function SortieCard({sortie}: {sortie: iSortie}) {
    const badge = STATUS_BADGE[sortie.status];

    return (<div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden">
        <ImageCarousel images={sortie.images} alt={sortie.title} badge={badge}/>
        <div className="flex-1 bg-beige flex flex-col justify-between gap-4 sm:gap-6 p-6 sm:p-8 md:p-10">
            <div>
                <h3 className="text-brown mb-2 sm:mb-4">{sortie.title}</h3>
                <p className="text-brown">{sortie.description}</p>
            </div>
            <div>
                <div className="border-t border-bbrown mb-4 sm:mb-6"/>
                <div className="flex flex-wrap gap-x-5 sm:gap-x-8 gap-y-2 sm:gap-y-3 mb-6 text-brown">
                    <TextIcon Icon={PinIcon}>{sortie.place}</TextIcon>
                    <TextIcon Icon={ClockIcon}>{DUREE_LABELS[sortie.duration] ?? sortie.duration}</TextIcon>
                    <TextIcon Icon={WalkIcon}>{sortie.walking_time_approach}<SM> min de marche d&#39;approche</SM></TextIcon>
                    <TextIcon Icon={PersonIcon}><SM>À partir de </SM>{sortie.minimum_age} ans</TextIcon>
                    <TextIcon Icon={EuroIcon}>{sortie.price}€<SM>/Personne</SM></TextIcon>
                </div>
                <Button href="/contact" raison="Demande de réservation">Réserver</Button>
            </div>
        </div>
    </div>);
}

function ImageCarousel({images, alt, badge}: {images: {image: string}[], alt: string, badge?: {label: string, className: string}}) {
    const [index, setIndex] = useState(0);

    if (images.length === 0)
        return <div className="relative w-full md:w-1/2 h-72 md:h-auto bg-bbrown">{badge && <StatusBadge badge={badge}/>}</div>;

    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
    const next = () => setIndex((i) => (i + 1) % images.length);

    return (<div className="relative w-full lg:w-1/2 h-72 lg:h-auto overflow-hidden">
        {badge && <StatusBadge badge={badge}/>}
        <div className="flex h-full transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${index * 100}%)`}}>
            {images.map((img, i) => (
                <div key={i} className="relative w-full h-full shrink-0">
                    <Image className="object-cover" src={img.image} alt={alt} fill sizes="700px" />
                </div>
            ))}
        </div>
        {images.length > 1 && <>
            <PictureChevron func={prev} label="Image précédente" rotate={true}/>
            <PictureChevron func={next} label="Image suivante"/>
        </>}
    </div>);
}

function StatusBadge({badge}: {badge: {label: string, className: string}}) {
    return (<span className={`absolute top-4 left-4 z-10 rounded-full px-4 py-1.5 text-sm md:text-base font-semibold ${badge.className}`}>
        {badge.label}
    </span>);
}

function PictureChevron({func, label, rotate=false}: {func: () => void, label: string, rotate?: boolean}) {
    return (<button onClick={func} aria-label={label} className={"absolute top-1/2 -translate-y-1/2 opacity-90 hover:opacity-100 cursor-pointer p-2 " + (rotate ? "left-2" : "right-2")}>
        <span className={rotate ? "block rotate-180" : ""}><ChevronIcon color="white" size={20}/></span>
    </button>);
}

function TextIcon({children, Icon}: {children: React.ReactNode, Icon: typeof PinIcon}) {
    return <span className="flex items-center gap-2"><Icon color="brown" size={18}/><span>{children}</span></span>
}

function SM({children}: {children: string}) {
    return <span className="text-sm tracking-tight">{children}</span>
}
