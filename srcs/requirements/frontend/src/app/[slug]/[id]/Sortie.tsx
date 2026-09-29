"use client";

import Image from "next/image";
import Link from "next/link";
import {redirect, useParams} from "next/navigation";
import React, {useState} from "react";
import {useSorties} from "@/services/get.service";
import {ClockIcon, EuroIcon, PersonIcon, PinIcon} from "@/components/Icons";
import SmallText from "@/components/SmallText";
import {ReserverButton, TextButton} from "@/components/Buttons";
import ImageModal from "@/components/ImageModal";
import {iSmallSortie, iSortie, iSortieCat} from "@/types/api";

const CONTAINER = "container mx-auto px-5 max-w-6xl";
const H2_CLASS = "text-brown text-2xl lg:text-3xl 2xl:text-4xl";

export default function Sortie() {
    const {slug, id} = useParams<{slug: string, id: string}>();
    const {data: categories, isLoading} = useSorties();
    const categorie = categories?.find((c) => c.slug === slug);
    const sortie = categorie?.sorties.find((s) => s.id === Number(id));

    if (isLoading)
        return (<div className="nav-offset py-32 text-center"><SmallText>Chargement...</SmallText></div>);

    if (!categorie || !sortie)
        redirect(categorie ? `/${categorie.slug}` : "/");

    return (<div className="nav-offset py-14 sm:py-18 flex flex-col gap-14 md:gap-20">
        <div className={CONTAINER + " py-6"}>
                <TextButton href={`/${categorie.slug}`} className="inline-flex text-brown mb-8">← {categorie.name}</TextButton>
                <div className="text-center">
                    <h1 className="text-brown mb-3 md:mb-4">{sortie.title}</h1>
                    {sortie.subtitle && <p className="text-brown text-lg md:text-xl mb-6 md:mb-8">{sortie.subtitle}</p>}
                    <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-2 text-brown font-semibold">
                        <SortieInfos sortie={sortie} size={22}/>
                    </div>
                </div>
        </div>

        <Section title="La marche d'approche" fullWidth={true}>
            <WalkingApproach sortie={sortie}/>
        </Section>

        {sortie.icons.length > 0 && (<Section title="Et sous terre ?">
            <IconsBlock icons={sortie.icons}/>
        </Section>)}

        <p className={CONTAINER + " text-brown text-lg md:text-xl whitespace-pre-line"}>{sortie.description}</p>

        {sortie.images.length > 0 && <Photos images={sortie.images} title={sortie.title}/>}

        {sortie.for_who.length > 0 && (<Section title="Pour qui ?">
            <ul className="list-disc pl-6 space-y-1 text-brown text-lg md:text-xl">
                {sortie.for_who.map((text, i) => (<li key={i}>{text}</li>))}
            </ul>
        </Section>)}

        <section className="bg-beige px-6 py-12 sm:py-16 flex flex-col items-center text-center gap-6">
            <h2 className={H2_CLASS}>Vous voulez réserver cette sortie ?</h2>
            <ReserverButton label="Contactez-moi" raison={`Demande de réservation : ${sortie.title}`}/>
        </section>

        {sortie.related.length > 0 && (<Section title="Ou vous cherchez plutôt une sortie...">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {sortie.related.map((r, i) => (<div key={i} className="flex flex-col gap-3 items-center">
                    <h3 className="text-brown text-xl md:text-2xl">{r.title}</h3>
                    <SmallSortieCard sortie={r.recommended} categories={categories ?? []}/>
                </div>))}
            </div>
        </Section>)}
    </div>);
}

function Section({title, children, fullWidth=false}: {title: string, children: React.ReactNode, fullWidth?: boolean}) {
    const heading = <h2 className={H2_CLASS + " mb-4 md:mb-8"}>{title}</h2>;

    if (fullWidth)
        return (<section>
            <div className={CONTAINER}>{heading}</div>
            {children}
        </section>);

    return (<section className={CONTAINER}>
        {heading}
        {children}
    </section>);
}

function SortieInfos({sortie, size}: {sortie: Pick<iSmallSortie, "place" | "duration" | "minimum_age" | "price">, size: number}) {
    return (<>
        <TextIcon Icon={PinIcon} size={size}>{sortie.place}</TextIcon>
        <TextIcon Icon={ClockIcon} size={size}>{sortie.duration}</TextIcon>
        <TextIcon Icon={PersonIcon} size={size}>dès {sortie.minimum_age} ans</TextIcon>
        <TextIcon Icon={EuroIcon} size={size}>{sortie.price}€/Personne</TextIcon>
    </>);
}

function formatDuration(minutes: number) {
    if (minutes < 60)
        return `${minutes} min`;
    const rest = minutes % 60;
    return `${Math.floor(minutes / 60)}h${rest ? String(rest).padStart(2, "0") : ""}`;
}

function formatDistance(meters: number) {
    if (meters < 1000)
        return `${meters} m`;
    return `${(meters / 1000).toLocaleString("fr-FR", {maximumFractionDigits: 1})} km`;
}

function WalkingApproach({sortie}: {sortie: iSortie}) {
    const stats = [
        sortie.elevation_gain != null && {value: `${sortie.elevation_gain} mètres`, label: "De dénivelé"},
        sortie.distance != null && {value: formatDistance(sortie.distance), label: "De long"},
        {value: formatDuration(sortie.walking_time_approach), label: "De marche"},
    ].filter((s) => !!s);

    return (<div className="relative w-full aspect-4/3 sm:aspect-2/1 lg:aspect-3/1 xl:aspect-7/2 overflow-hidden">
        {sortie.image_walking_approach && <Image className="object-cover" src={sortie.image_walking_approach} alt="Marche d'approche" fill sizes="100vw"/>}
        <div className="absolute inset-0 bg-black-image"/>
        {sortie.elevation_profile && sortie.elevation_profile.length > 1 && (
            <div className="absolute top-[13%] bottom-[35%] left-[10%] right-[10%] lg:left-[14%] lg:right-[14%]">
                <ElevationProfile profile={sortie.elevation_profile}/>
            </div>
        )}
        <div className="absolute bottom-0 inset-x-0 grid grid-cols-3 gap-2 px-16 pb-5 sm:pb-8 lg:pb-12 text-center text-beige">
            {stats.map((s) => (<div key={s.label} className="flex flex-col">
                <span className="font-heading text-xl sm:text-3xl lg:text-4xl">{s.value}</span>
                <span className="text-xs sm:text-base lg:text-lg">{s.label}</span>
            </div>))}
        </div>
    </div>);
}

function ElevationProfile({profile}: {profile: [number, number][]}) {
    const WIDTH = 1000;
    const HEIGHT = 400;
    const maxDistance = profile[profile.length - 1][0] || 1;
    const altitudes = profile.map(([, alt]) => alt);
    const minAlt = Math.min(...altitudes);
    const altRange = Math.max(...altitudes) - minAlt || 1;

    const points = profile
        .map(([dist, alt]) => `${(dist / maxDistance) * WIDTH},${HEIGHT - ((alt - minAlt) / altRange) * HEIGHT}`)
        .join(" ");

    return (<svg className="w-full h-full overflow-visible" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none" aria-hidden="true">
        <polyline points={points} fill="none" stroke="var(--color-beige)" strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
    </svg>);
}

function IconsBlock({icons}: {icons: iSortie["icons"]}) {
    return (<div className="flex flex-wrap justify-evenly gap-x-16 gap-y-8">
        {icons.map((icon, i) => (<div key={i} className="flex items-center gap-4">
            <div className="relative w-16 h-16 md:w-18 md:h-18 shrink-0">
                <Image className="object-contain" src={icon.icon} alt={icon.title} fill sizes="72px"/>
            </div>
            <div className="flex flex-col">
                <h3 className="text-brown text-lg md:text-xl">{icon.title}</h3>
                <p className="text-brown text-sm md:text-base">{icon.description}</p>
            </div>
        </div>))}
    </div>);
}

function Photos({images, title}: {images: iSortie["images"], title: string}) {
    const [selected, setSelected] = useState<string | null>(null);

    const single = images.length === 1;

    return (<div className={"grid gap-1 sm:grid-cols-(--cols) " + (single ? "grid-cols-1" : "grid-cols-2")}
                 style={{"--cols": `repeat(${images.length}, minmax(0, 1fr))`} as React.CSSProperties}>
        {images.map((img) => (
            <button key={img.id} onClick={() => setSelected(img.image)} className={"relative overflow-hidden bg-bbrown cursor-pointer group " + (single ? "aspect-3/2 sm:aspect-3/1" : "aspect-3/2")}>
                <Image className="object-cover transition-transform duration-300 group-hover:scale-103" src={img.image} alt={title} fill sizes={`(min-width: 640px) ${Math.ceil(100 / images.length)}vw, ${single ? 100 : 50}vw`}/>
            </button>
        ))}
        {selected && <ImageModal title={title} src={selected} onClose={() => setSelected(null)}/>}
    </div>);
}

function SmallSortieCard({sortie, categories}: {sortie: iSmallSortie, categories: iSortieCat[]}) {
    const categorie = categories.find((c) => c.sorties.some((s) => s.id === sortie.id));
    if (!categorie)
        return null;

    return (<Link href={`/${categorie.slug}/${sortie.id}`} className="group flex-1 flex flex-col rounded-3xl overflow-hidden border-2 border-brown hover:border-orange">
        <div className="relative w-full aspect-3/2 shrink-0 bg-bbrown">
            {sortie.image && <Image className="object-cover" src={sortie.image} alt={sortie.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"/>}
        </div>
        <div className="flex-1 bg-beige flex flex-col gap-3 p-5">
            <h4 className="text-brown group-hover:text-orange">{sortie.title}</h4>
            <div className="border-t border-bbrown"/>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-brown text-sm">
                <SortieInfos sortie={sortie} size={16}/>
            </div>
        </div>
    </Link>);
}

function TextIcon({children, Icon, size}: {children: React.ReactNode, Icon: typeof PinIcon, size: number}) {
    return <span className="flex items-center gap-2"><Icon color="brown" size={size}/><span>{children}</span></span>
}
