"use client"

import {MouseEvent, PointerEvent, ReactNode, useEffect, useRef, useState} from "react";
import {useSorties} from "@/services/get.service";
import Image from "next/image";
import Link from "next/link";
import {FacebookIcon, InstagramIcon, YoutubeIcon} from "@/components/Icons";
import {iSortieCat} from "@/types/api";
import Button, {ReserverButton, SecondaryButton} from "@/components/Buttons";
import SmallText from "@/components/SmallText";


const socials = [
    {
        icon: InstagramIcon,
        image: "/images/illustrations/Instagram-illustration.webp",
        text: "Découvrez la beauté des grottes à travers mes images",
        label: "Me suivre sur Instagram",
        href: "https://www.instagram.com/anima_terra_speleo",
    },
    {
        icon: YoutubeIcon,
        image: "/images/illustrations/Youtube-illustration.webp",
        text: "Plongez dans mes aventures spéléo en grand format",
        label: "Me suivre sur YouTube",
        href: "https://www.youtube.com/@anima-terra",
    },
    {
        icon: FacebookIcon,
        image: "/images/illustrations/Facebook-illustration.webp",
        text: "Restez informé de toute l’actualité d’Anima Terra",
        label: "Me suivre sur Facebook",
        href: "https://www.facebook.com/people/Anima-Terra/61578121357957/?locale=fr_FR",
    },
];


export default function Home() {
    const [visible, setVisible] = useState(false);
    const {data: sorties, isLoading: isLoadingSorties} = useSorties();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVisible(true);
    }, []);

    return (<div>
            <section className="relative h-130 md:h-180 flex items-center justify-center overflow-hidden bg-cover bg-fixed bg-position-[center_550px] md:bg-position-[center_800px]"
            style={{backgroundImage: "url('/images/heroes/Bandeau-accueil-illustration.jpg')"}}>
                <div className="absolute inset-0 size-full bg-black-image z-20"/>
                <div className="relative z-20 container mx-auto px-12 text-center mt-20 md:mt-0">
                    <h1 className={"text-white transition-all duration-700 ease-out" + (visible ? " translate-y-0 opacity-100" : " -translate-y-8 opacity-0")}>Une aventure inoubliable vous attend sous les montagnes des Hautes-Alpes</h1>
                </div>
            </section>

            <SectionItems titre="Les sorties" isLoading={isLoadingSorties}>
                {sorties?.map((item) => (<Sortie key={item.id} s={item}/>))}
            </SectionItems>

            <p>Version 1:</p>
            <div className="bg-brown py-20">
                <div className="flex items-center justify-center px-5">
                    <div className="flex items-center gap-6 sm:gap-10 max-w-3xl">
                        <div className="relative size-32 sm:size-32 lg:size:46 2xl:size-56 rounded-2xl overflow-hidden shrink-0">
                            <Image className="object-cover" src="/images/illustrations/Presentation-illustration-pp.png" alt="Guillaume, guide de spéléologie" fill sizes="250px"/>
                        </div>
                        <div className="text-beige text-center sm:text-left">
                            <p className="mb-4">Je suis Guillaume, guide de spéléologie passionné. Je vous propose de partir à la découverte de grottes, proches du gîte, dans une ambiance conviviale.</p>
                            <Link href="/presentation" className="inline-flex items-center gap-2 font-bold hover:text-orange transition-colors duration-300">→ En savoir plus</Link>
                        </div>
                    </div>
                </div>
            </div>

            <p>Version 2:</p>
            <section className="relative bg-brown pt-60 pb-8 lg:py-24 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-72 lg:h-full">
                    <Image className="object-cover object-[center_48%]" src="/images/illustrations/Presentation-illustration.jpg" alt="Guillaume, guide de spéléologie, dans un puits" fill sizes="100vw"/>
                    <div className="absolute inset-0 bg-black-image opacity-40"/>
                </div>
                <div className="relative container mx-auto px-5 flex lg:justify-end">
                    <div className="w-full lg:max-w-md bg-beige text-brown rounded-2xl p-8 text-center">
                        <h3 className="mb-4">Je suis Guillaume</h3>
                        <p className="mb-6">Guide de spéléologie passionné, je vous propose de partir à la découverte de grottes, proches du gîte, dans une ambiance conviviale.</p>
                        <Button href="/presentation">En savoir plus</Button>
                    </div>
                </div>
            </section>

            <p>Version 3:</p>
            <SectionItems titre="Votre guide">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image className="object-cover" src="/images/illustrations/Presentation-illustration-pp.png" alt="Guillaume, guide de spéléologie" fill sizes="(min-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-brown text-beige text-center p-8 lg:aspect-square">
                    <h3>Je suis Guillaume</h3>
                    <p>Guide de spéléologie passionné, je vous propose de partir à la découverte de grottes, proches du gîte, dans une ambiance conviviale.</p>
                </div>
                <Link href="/presentation" className="group relative aspect-square rounded-2xl overflow-hidden flex items-end justify-center pb-8">
                    <Image className="object-cover" src="/images/illustrations/Instagram-illustration.webp" alt="" fill sizes="(min-width: 1024px) 33vw, 100vw"/>
                    <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-opacity duration-400 ease-out"/>
                    <span className="relative px-5 py-3 bg-beige group-hover:bg-orange rounded-full text-brown font-semibold">En savoir plus</span>
                </Link>
            </SectionItems>

            <p>Version 4:</p>
            <section className="py-14 lg:py-20">
                <div className="container mx-auto px-26 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="text-brown text-center lg:text-left">
                        <h2 className="mb-5">Je suis Guillaume</h2>
                        <p className="mb-8 max-w-xl mx-auto lg:mx-0">Guide de spéléologie passionné, je vous propose de partir à la découverte de grottes, proches du gîte, dans une ambiance conviviale.</p>
                        <Button href="/presentation">En savoir plus</Button>
                    </div>
                    <div className="relative h-92 sm:h-112 max-w-xl w-full mx-auto">
                        <div className="absolute top-0 left-0 w-3/5 h-full rounded-2xl overflow-hidden">
                            <Image className="object-cover object-[center_55%]" src="/images/illustrations/Instagram-illustration.webp" alt="Guillaume dans un puits" fill sizes="(min-width: 1024px) 350px, 60vw"/>
                        </div>
                        <div className="absolute bottom-6 right-0 w-1/2 aspect-square rounded-2xl overflow-hidden border-4 border-white">
                            <Image className="object-cover" src="/images/illustrations/Presentation-illustration-pp.png" alt="Portrait de Guillaume" fill sizes="(min-width: 1024px) 300px, 50vw"/>
                        </div>
                    </div>
                </div>
            </section>

            <p>Version 5:</p>
            <SectionItems titre="Votre guide">
                <Link href="/presentation" className="group col-span-full w-full max-w-4xl xl:max-w-5xl mx-auto grid lg:grid-cols-5 rounded-2xl overflow-hidden bg-brown text-beige">
                    <div className="relative h-92 lg:h-auto lg:min-h-92 lg:col-span-2">
                        <Image className="object-cover" src="/images/illustrations/Presentation-illustration-pp.png" alt="Guillaume, guide de spéléologie" fill sizes="(min-width: 1024px) 400px, 100vw"/>
                    </div>
                    <div className="lg:col-span-3 flex flex-col items-center justify-center gap-6 px-6 py-8 lg:px-10 text-center">
                        <h3>Je suis Guillaume</h3>
                        <p>Guide de spéléologie passionné, je vous propose de partir à la découverte de grottes, proches du gîte, dans une ambiance conviviale.</p>
                        <span className="font-bold group-hover:text-orange transition-colors duration-300">En savoir plus →</span>
                    </div>
                </Link>
            </SectionItems>

            <p>Version 6:</p>
            <section className="bg-beige text-brown py-20 lg:py-28">
                <div className="container mx-auto px-5 max-w-5xl text-center">
                    <h2 className="text-brown leading-tight!">
                        Je suis
                        <span className="relative inline-block align-middle w-24 h-12 md:w-30 md:h-16 xl:w-36 xl:h-20 2xl:w-38 2xl:h-24 mx-2 md:mx-3 -mt-1 rounded-full overflow-hidden">
                            <Image className="object-cover object-[center_25%]" src="/images/illustrations/Presentation-illustration-pp.png" alt="Portrait de Guillaume" fill sizes="210px"/>
                        </span>
                        Guillaume, guide de spéléologie passionné
                    </h2>
                    <p className="max-w-2xl mx-auto mt-6 mb-8">Je vous propose de partir à la découverte de grottes, proches du gîte, dans une ambiance conviviale.</p>
                    <Button href="/presentation">En savoir plus</Button>
                </div>
            </section>

            <p>Version 7:</p>
            <section className="bg-brown text-beige">
                <div className="lg:container mx-auto lg:px-5 grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center lg:gap-16 xl:gap-24">
                    <div className="relative z-10 aspect-4/3 sm:aspect-2/1 lg:aspect-4/5 lg:-my-12 lg:rounded-2xl overflow-hidden">
                        <Image className="object-cover object-[center_62%]" src="/images/illustrations/Presentation-illustration.jpg" alt="Guillaume, guide de spéléologie" fill sizes="(min-width: 1024px) 40vw, 100vw"/>
                    </div>
                    <div className="px-5 lg:px-0 py-12 lg:py-20">
                        <span className="text-orange font-heading tracking-widest uppercase">Votre guide</span>
                        <h2 className="text-beige mt-2 mb-5">Je suis Guillaume</h2>
                        <p className="max-w-xl mb-8">Guide de spéléologie passionné, je vous propose de partir à la découverte de grottes, proches du gîte, dans une ambiance conviviale.</p>
                        <SecondaryButton href="/presentation">En savoir plus</SecondaryButton>
                    </div>
                </div>
            </section>

            <p>Version 8:</p>
            <div className="bg-brown py-20">
                <div className="container mx-auto px-5 flex justify-center">
                    <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10 max-w-3xl bg-white/5 rounded-3xl p-8 sm:p-10">
                        <div className="relative size-32 sm:size-40 lg:size-48 rounded-xl overflow-hidden shrink-0">
                            <Image className="object-cover" src="/images/illustrations/Presentation-illustration-pp.png" alt="Guillaume, guide de spéléologie" fill sizes="250px"/>
                        </div>
                        <div className="text-beige text-center sm:text-left">
                            <span className="text-orange font-heading text-sm tracking-widest uppercase">Votre guide</span>
                            <h4 className="text-beige mt-1 mb-3">Guillaume</h4>
                            <p className="mb-4">Je suis Guillaume, guide de spéléologie passionné. Je vous propose de partir à la découverte de grottes, proches du gîte, dans une ambiance conviviale.</p>
                            <Link href="/presentation" className="inline-flex items-center gap-2 font-bold hover:text-orange transition-colors duration-300">→ En savoir plus</Link>
                        </div>
                    </div>
                </div>
            </div>

            <p>Version 9:</p>
            <section className="relative py-28 lg:py-36 flex items-center justify-center overflow-hidden">
                <Image className="object-cover object-center" src="/images/illustrations/Presentation-illustration-pp.png" alt="Guillaume, guide de spéléologie" fill sizes="100vw"/>
                <div className="absolute inset-0 size-full bg-black-image z-10"/>
                <div className="relative z-10 container mx-auto px-5 text-beige text-center">
                    <h3 className="mb-4">Je suis Guillaume</h3>
                    <p className="max-w-xl mx-auto mb-8">Guide de spéléologie passionné, je vous propose de partir à la découverte de grottes, proches du gîte, dans une ambiance conviviale.</p>
                    <SecondaryButton href="/presentation">En savoir plus</SecondaryButton>
                </div>
            </section>

            <SectionItems titre="Réseaux sociaux">
                {socials.map((social) => (<Social key={social.label} {...social}/>))}
            </SectionItems>

            <section className="relative py-32 flex items-center justify-center overflow-hidden">
                <Image className="object-cover object-[0px_center]" src="/images/illustrations/Bandeau-photo-illustration.jpg" alt="La magie souterraine en images" fill sizes="100vw"/>
                <div className="absolute inset-0 size-full bg-black-image z-10"/>
                <div className="relative z-10 container mx-auto px-5 text-beige text-center">
                    <h3 className="mb-4">La magie souterraine en images</h3>
                    <p className="max-w-xl mx-auto mb-8">Retrouvez ici mes photos et celles de mes coéquipiers, souvenirs précieux de nos aventures.</p>
                    <SecondaryButton href="/galerie-photo">Voir la galerie</SecondaryButton>
                </div>
            </section>

            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-16 flex flex-col gap-8 items-center">
                    <h3 className="text-brown text-center">Et si votre prochaine aventure se vivait sous terre ?</h3>
                    <ReserverButton bigger={true}/>
                </div>
            </section>
        </div>
    );
}

function SectionItems({children, titre, isLoading}: {children: ReactNode, titre: string, isLoading?: boolean}) {
    return (<section className="py-14 lg:py-20">
        <div className="container mx-auto px-5">
            <h2 className="text-center text-brown mb-8 lg:mb-12">{titre}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {isLoading ? <SmallText className="col-span-full text-center">Chargement...</SmallText> : children}
            </div>
        </div>
    </section>);
}

const CARD_TILT_STRENGTH = 10;
const PARALLAX_BG_STRENGTH = 8;
const PARALLAX_FRONT_STRENGTH = 22;

function Sortie({s}: {s: iSortieCat}) {
    const frameRef = useRef<HTMLAnchorElement>(null);
    const [offset, setOffset] = useState({x: 0, y: 0});

    const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
        const frame = frameRef.current;
        if (!frame) return;
        const rect = frame.getBoundingClientRect();
        setOffset({
            x: (e.clientX - rect.left) / rect.width - 0.5,
            y: (e.clientY - rect.top) / rect.height - 0.5,
        });
    };

    const resetOffset = () => setOffset({x: 0, y: 0});

    return (<Link ref={frameRef} href={`/${s.slug}`} onMouseMove={handleMouseMove} onMouseLeave={resetOffset}
                  style={{transform: `perspective(800px) rotateX(${-offset.y * CARD_TILT_STRENGTH}deg) rotateY(${offset.x * CARD_TILT_STRENGTH}deg)`}}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-brown text-beige transition-transform duration-300 ease-out">
        <h3 className="py-7 text-center">{s.name}</h3>
        <div className="relative h-92 overflow-hidden">
            {s.image_front && s.image_bg ? (<>
                <Image className="object-cover scale-110 transition-transform duration-300 ease-out"
                       style={{transform: `translate(${-offset.x * PARALLAX_BG_STRENGTH}px, ${-offset.y * PARALLAX_BG_STRENGTH}px)`}}
                       src={s.image_bg!} alt={`Fond sortie ${s.name}`} fill sizes="550px"/>
                <Image className="object-cover scale-110 transition-transform duration-300 ease-out"
                       style={{transform: `translate(${offset.x * PARALLAX_FRONT_STRENGTH}px, ${offset.y * PARALLAX_FRONT_STRENGTH}px)`}}
                       src={s.image_front!} alt={`Personnage sortie ${s.name}`} fill sizes="550px"/>
            </>) : (
                <Image className="object-cover" src={s.image} alt={`Image sortie ${s.name}`} fill sizes="550px"/>
            )}
        </div>
        <div className="flex flex-1 flex-col items-center justify-between gap-6 px-6 py-6 text-center">
            <p>{s.description}</p>
            <span className="font-bold group-hover:text-orange transition-colors duration-300">Voir les sorties →</span>
        </div>
    </Link>);
}

function Social({icon: Icon, image, text, label, href}: {icon: typeof InstagramIcon, image: string, text: string, label: string, href: string}) {
    return (<Link href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 group px-8 sm:px-16 lg:px-0">
        <div className="relative aspect-square rounded-2xl overflow-hidden flex flex-col items-center justify-between py-6">
            <Image className="object-cover" src={image} alt={label} fill sizes="500px" loading="eager"/>
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-opacity duration-400 ease-out"/>
            <div className="relative"/>
            <p className="relative text-beige leading-tight text-center font-heading text-3xl sm:text-5xl md:text-6xl lg:text-3xl xl:text-4xl 2xl:text-5xl mx-2 sm:mx-8">{text}</p>
            <div className="relative px-5 py-3 lg:px-4 lg:py-2 xl:px-5 xl:py-3 bg-beige group-hover:bg-orange rounded-full flex items-center gap-0 sm:gap-1 lg:gap-0 xl:gap-1">
                <Icon color="brown" size={35} className="size-6 sm:size-8 lg:size-10"/>
                <span className="text-brown relative z-10 px-1 sm:px-2 font-semibold text-nowrap lg:text-base xl:text-lg text-base sm:text-lg lg:tracking-tight tracking-tight sm:tracking-normal xl:tracking-normal">{label}</span>
            </div>
        </div>
    </Link>);
}
