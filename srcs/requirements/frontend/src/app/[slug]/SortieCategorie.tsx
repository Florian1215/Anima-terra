"use client";

import Image from 'next/image';
import Link from 'next/link';
import {redirect, useParams} from 'next/navigation';
import React, {UIEvent, useEffect, useRef, useState} from 'react';
import {useSorties} from "@/services/get.service";
import {ChevronIcon, ClockIcon, EuroIcon, PersonIcon, PinIcon, WalkIcon} from "@/components/Icons";
import SmallText from "@/components/SmallText";
import {SecondaryButton, TextButton} from "@/components/Buttons";
import {iSortie, iSortieCat} from "@/types/api";

const STATUS_BADGE: Partial<Record<iSortie["status"], {label: string, className: string}>> = {
    'temporairement-indisponible': {label: 'Temporairement indisponible', className: 'bg-red text-white'},
    'prochainement-disponible': {label: 'Prochainement disponible', className: 'bg-orange text-brown'},
};

const ROPE_LIGHT_LINE = 0.65;
const HERO_LAYER = "absolute inset-x-0 top-0 h-[calc(100%+6rem)]";

export default function SortieCategorie() {
    const {slug} = useParams<{slug: string}>();
    const {data: categories, isLoading} = useSorties();
    const categorie = categories?.find((c) => c.slug === slug);

    if (isLoading)
        return (<div className="nav-offset py-32 text-center"><SmallText>Chargement...</SmallText></div>);

    if (!categorie)
        redirect("/");

    return (<div className="nav-offset bg-brown text-beige">
        <Hero categorie={categorie}/>

        <div className="container mx-auto px-5 pt-32 pb-12 lg:pt-40 lg:pb-20">
            {categorie.sorties.length === 0
                ? <SmallText className="text-center">Aucune sortie disponible pour le moment</SmallText>
                : <Corde key={categorie.id} categorie={categorie}/>}
        </div>

        <footer className="container mx-auto px-5 pb-16 lg:pb-24 flex flex-col items-center gap-10 text-center">
            <p className="max-w-3xl text-sm sm:text-base italic text-light-beige">
                Tarif valable à partir de 3 personnes. Pour les groupes de 1 à 2 personnes, un minimum de 3 places est facturé, sauf s&apos;il existe une possibilité de vous intégrer à un autre groupe. <TextButton href={"/contact"} raison="Demande de réservation" className="text-beige">Contactez-moi</TextButton> pour connaître les possibilités de regroupement.
            </p>
        </footer>
    </div>);
}

function Hero({categorie}: {categorie: iSortieCat}) {
    const fond = categorie.image_bg ?? categorie.image;
    const personnage = categorie.image_bg ? categorie.image_front : undefined;

    return (<section className="relative h-112 md:h-140 flex items-end">
        <div className="absolute inset-0 overflow-hidden">
            <div className={HERO_LAYER}>
                <Image className="object-cover object-[center]" src={fond} alt="" fill sizes="100vw" preload/>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-linear-to-t from-brown via-brown/70 to-transparent"/>
        </div>
        {personnage && <div className={HERO_LAYER + " z-10 pointer-events-none"}>
            <Image className="object-cover object-[center] [mask-image:linear-gradient(to_bottom,black_85%,transparent)]" src={personnage} alt="" fill sizes="100vw" preload/>
        </div>}
        <div className="relative z-20 container mx-auto px-5 pb-8 lg:pb-12 text-center [text-shadow:0_1px_10px_rgb(32_27_22/0.85)]">
            <h1 className="text-beige mb-3">{categorie.name}</h1>
            <p className="max-w-2xl mx-auto text-beige">{categorie.description}</p>
        </div>
    </section>);
}

function Corde({categorie}: {categorie: iSortieCat}) {
    const listRef = useRef<HTMLOListElement>(null);
    const fillRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const update = () => {
            const list = listRef.current;
            const fill = fillRef.current;
            if (!list || !fill)
                return;
            const rect = list.getBoundingClientRect();
            const lightLine = window.innerHeight * ROPE_LIGHT_LINE;
            const progress = Math.min(1, Math.max(0, (lightLine - rect.top) / rect.height));
            fill.style.transform = `scaleY(${progress})`;
            list.querySelectorAll<HTMLElement>("[data-noeud]").forEach((noeud) => {
                noeud.dataset.atteint = String(noeud.getBoundingClientRect().top < lightLine);
            });
        };

        update();
        window.addEventListener("scroll", update, {passive: true});
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (<div className="relative">
        <div aria-hidden="true" className="absolute top-0 bottom-0 left-3 lg:left-1/2 w-0.5 -translate-x-1/2 bg-bbeige">
            <div ref={fillRef} className="size-full origin-top bg-orange motion-safe:transition-transform motion-safe:duration-150" style={{transform: "scaleY(0)"}}/>
        </div>
        <ol ref={listRef} className="flex flex-col gap-14 lg:gap-24">
            {categorie.sorties.map((s, i) => (
                <Etape key={s.id} sortie={s} index={i + 1} reversed={i % 2 === 1} href={`/${categorie.slug}/${s.slug}`}/>
            ))}
        </ol>
    </div>);
}

function Etape({sortie, index, reversed, href}: {sortie: iSortie, index: number, reversed: boolean, href: string}) {
    const badge = STATUS_BADGE[sortie.status];

    return (<li className="relative grid lg:grid-cols-2 items-center gap-x-24 gap-y-4 pl-9 lg:pl-0">
        <span data-noeud="" data-atteint="false" aria-hidden="true"
              className="absolute top-3 lg:top-1/2 left-3 lg:left-1/2 size-5 -translate-x-1/2 lg:-translate-y-1/2 rounded-full border-2 border-beige bg-brown transition-colors duration-300 data-[atteint=true]:bg-orange data-[atteint=true]:border-orange"/>

        <Photos images={sortie.images} alt={sortie.title} badge={badge} className={reversed ? "lg:order-2" : ""}/>

        <div className={reversed ? "lg:text-right lg:order-1" : ""}>
            <span className="font-heading text-orange text-lg">{String(index).padStart(2, "0")} / </span>
            <Link href={href} className="inline">
                <h2 className="inline text-beige text-3xl xl:text-4xl hover:text-orange transition-colors duration-150">{sortie.title}</h2>
            </Link>
            <p className="mt-3 mb-5 text-sm sm:text-base text-light-beige">{sortie.description}</p>
            <div className={"flex flex-wrap gap-x-5 gap-y-1.5 mb-6 text-sm " + (reversed ? "lg:justify-end" : "")}>
                <TextIcon Icon={PinIcon}>{sortie.place}</TextIcon>
                <TextIcon Icon={ClockIcon}>{sortie.duration}</TextIcon>
                <TextIcon Icon={WalkIcon}>{sortie.walking_time_approach} min</TextIcon>
                <TextIcon Icon={PersonIcon}>dès {sortie.minimum_age} ans</TextIcon>
                <TextIcon Icon={EuroIcon}>{sortie.price}€/Personne</TextIcon>
            </div>
            {sortie.status === "disponible"
                ? <SecondaryButton href="/contact" raison="Demande de réservation">Réserver</SecondaryButton>
                : <SecondaryButton href="/contact" raison="Demande de renseignement">Se renseigner</SecondaryButton>}
        </div>
    </li>);
}

function Photos({images, alt, badge, className}: {images: iSortie["images"], alt: string, badge?: {label: string, className: string}, className: string}) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    const goTo = (target: number) => {
        const track = trackRef.current;
        if (track)
            track.scrollTo({left: track.clientWidth * ((target + images.length) % images.length), behavior: "smooth"});
    };

    const handleScroll = (e: UIEvent<HTMLDivElement>) => {
        const {scrollLeft, clientWidth} = e.currentTarget;
        setIndex(Math.round(scrollLeft / clientWidth));
    };

    return (<div className={"relative aspect-3/2 overflow-hidden rounded-2xl bg-bbeige " + className}>
        <div ref={trackRef} onScroll={handleScroll} className="flex h-full overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {images.map((img) => (
                <div key={img.id} className="relative w-full h-full shrink-0 snap-center">
                    <Image className="object-cover" src={img.image} alt={alt} fill sizes="(min-width: 1024px) 45vw, 100vw"/>
                </div>
            ))}
        </div>
        {badge && <span className={`absolute top-4 left-4 rounded-full px-4 py-1.5 text-sm font-semibold ${badge.className}`}>{badge.label}</span>}
        {images.length > 1 && <>
            <PhotoChevron onClick={() => goTo(index - 1)} label="Photo précédente" previous/>
            <PhotoChevron onClick={() => goTo(index + 1)} label="Photo suivante"/>
            <div aria-hidden="true" className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5 pointer-events-none">
                {images.map((img, i) => <span key={img.id} className={"size-2 rounded-full transition-colors duration-200 " + (i === index ? "bg-orange" : "bg-beige")}/>)}
            </div>
        </>}
    </div>);
}

function PhotoChevron({onClick, label, previous=false}: {onClick: () => void, label: string, previous?: boolean}) {
    return (<button onClick={onClick} aria-label={label} className={"absolute top-1/2 -translate-y-1/2 size-10 flex items-center justify-center rounded-full bg-black-image hover:bg-orange cursor-pointer transition-colors duration-150 " + (previous ? "left-2" : "right-2")}>
        <span className={previous ? "block rotate-180" : ""}><ChevronIcon color="beige" size={16}/></span>
    </button>);
}

function TextIcon({children, Icon}: {children: React.ReactNode, Icon: typeof PinIcon}) {
    return <span className="flex items-center gap-2 text-beige"><Icon color="orange" size={16}/><span>{children}</span></span>
}
