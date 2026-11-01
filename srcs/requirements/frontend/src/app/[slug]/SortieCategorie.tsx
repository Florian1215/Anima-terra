"use client";

import Image from 'next/image';
import Link from 'next/link';
import {redirect, useParams} from 'next/navigation';
import React, {useEffect, useRef} from 'react';
import {useSorties} from "@/services/get.service";
import {ClockIcon, EuroIcon, PersonIcon, PinIcon, WalkIcon} from "@/components/Icons";
import SmallText from "@/components/SmallText";
import {SecondaryButton, TextButton} from "@/components/Buttons";
import {iSortie, iSortieCat} from "@/types/api";

const STATUS_BADGE: Partial<Record<iSortie["status"], {label: string, className: string}>> = {
    'temporairement-indisponible': {label: 'Temporairement indisponible', className: 'bg-red text-white'},
    'prochainement-disponible': {label: 'Prochainement disponible', className: 'bg-orange text-brown'},
};

const ROPE_LIGHT_LINE = 0.65;

export default function SortieCategorie() {
    const {slug} = useParams<{slug: string}>();
    const {data: categories, isLoading} = useSorties();
    const categorie = categories?.find((c) => c.slug === slug);

    if (isLoading)
        return (<div className="nav-offset py-32 text-center"><SmallText>Chargement...</SmallText></div>);

    if (!categorie)
        redirect("/");

    const position = categories?.findIndex((c) => c.id === categorie.id) ?? 0;
    const suivante = categories?.[position + 1];

    return (<div className="nav-offset bg-linear-to-b from-brown from-30% to-black text-beige">
        <Hero categorie={categorie}/>

        <div className="container mx-auto px-5 py-12 lg:py-20">
            {categorie.sorties.length === 0
                ? <SmallText className="text-center">Aucune sortie disponible pour le moment</SmallText>
                : <Corde key={categorie.id} categorie={categorie}/>}
        </div>

        <footer className="container mx-auto px-5 pb-16 lg:pb-24 flex flex-col items-center gap-10 text-center">
            {suivante && <Link href={`/${suivante.slug}`} className="group flex flex-col items-center gap-1">
                <span className="text-sm text-light-beige">Continuer la descente</span>
                <span className="font-heading text-3xl lg:text-5xl group-hover:text-orange transition-colors duration-150">{suivante.name} ↓</span>
            </Link>}
            <p className="max-w-3xl text-sm sm:text-base italic text-light-beige">
                Tarif valable à partir de 3 personnes. Pour les groupes de 1 à 2 personnes, un minimum de 3 places est facturé, sauf s&apos;il existe une possibilité de vous intégrer à un autre groupe. <TextButton href={"/contact"} raison="Demande de réservation" className="text-beige">Contactez-moi</TextButton> pour connaître les possibilités de regroupement.
            </p>
        </footer>
    </div>);
}

function Hero({categorie}: {categorie: iSortieCat}) {
    const layers = categorie.image_bg && categorie.image_front ? [categorie.image_bg, categorie.image_front] : [categorie.image];

    return (<section className="relative h-96 md:h-120 overflow-hidden flex items-end">
        {layers.map((src) => <Image key={src} className="object-cover object-[center_30%]" src={src} alt="" fill sizes="100vw" preload/>)}
        <div className="absolute inset-0 bg-linear-to-t from-brown via-black-image to-black-image"/>
        <div className="relative container mx-auto px-5 pb-8 lg:pb-12 text-center">
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

    return (<li className="group relative grid lg:grid-cols-2 items-center gap-x-24 gap-y-4 pl-9 lg:pl-0">
        <span data-noeud="" data-atteint="false" aria-hidden="true"
              className="absolute top-3 lg:top-1/2 left-3 lg:left-1/2 size-5 -translate-x-1/2 lg:-translate-y-1/2 rotate-45 border-2 border-beige bg-brown transition-colors duration-300 data-[atteint=true]:bg-orange data-[atteint=true]:border-orange"/>

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
    const [first, second] = images;

    return (<div className={"relative aspect-3/2 overflow-hidden rounded-2xl bg-bbeige " + className}>
        {first && <Image className="object-cover" src={first.image} alt={alt} fill sizes="(min-width: 1024px) 45vw, 100vw"/>}
        {second && <Image className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" src={second.image} alt={alt} fill sizes="(min-width: 1024px) 45vw, 100vw"/>}
        {badge && <span className={`absolute top-4 left-4 rounded-full px-4 py-1.5 text-sm font-semibold ${badge.className}`}>{badge.label}</span>}
    </div>);
}

function TextIcon({children, Icon}: {children: React.ReactNode, Icon: typeof PinIcon}) {
    return <span className="flex items-center gap-2 text-beige"><Icon color="orange" size={16}/><span>{children}</span></span>
}
