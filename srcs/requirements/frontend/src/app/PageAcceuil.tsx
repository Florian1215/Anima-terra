"use client"

import {MouseEvent, ReactNode, useEffect, useRef, useState} from "react";
import {useSorties} from "@/services/get.service";
import Image from "next/image";
import Link from "next/link";
import {BG, FacebookIcon, InstagramIcon, YoutubeIcon} from "@/components/Icons";
import {iSortieCat} from "@/types/api";
import {ReserverButton, SecondaryButton} from "@/components/Buttons";
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

            <div className="relative">
                <BG/>
                <div className="absolute inset-0 flex items-center justify-center px-5 mt-10">
                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 max-w-3xl">
                        <div className="relative size-32 sm:size-40 md:size-56 rounded-full overflow-hidden shrink-0">
                            <Image className="object-cover" src="/images/illustrations/Presentation-illustration-pp.png" alt="Guillaume, guide de spéléologie" fill sizes="250px"/>
                        </div>
                        <div className="text-beige text-center sm:text-left">
                            <p className="mb-4">Je suis Guillaume, guide de spéléologie passionné. Je vous propose de partir à la découverte de grottes, proches du gîte, dans une ambiance conviviale.</p>
                            <Link href="/presentation" className="inline-flex items-center gap-2 font-bold hover:text-orange transition-colors duration-300">→ En savoir plus</Link>
                        </div>
                    </div>
                </div>
            </div>

            <SectionItems titre="Réseaux sociaux">
                {socials.map((social) => (<Social key={social.label} {...social}/>))}
            </SectionItems>

            <section className="relative py-32 flex items-center justify-center overflow-hidden">
                <Image className="object-cover object-[0px_center]" src="/images/illustrations/Bandeau-photo-illustration.jpg" alt="La magie souterraine en images" fill sizes="100vw"/>
                <div className="absolute inset-0 size-full bg-black-image z-10"/>
                <div className="relative z-10 container mx-auto px-5 text-white text-center">
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
    const hasParallax = Boolean(s.image_front && s.image_bg);

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

    return (<Link ref={frameRef} href={`/${s.slug}`} onMouseMove={hasParallax ? handleMouseMove : undefined} onMouseLeave={hasParallax ? resetOffset : undefined}
                  style={{transform: `perspective(800px) rotateX(${-offset.y * CARD_TILT_STRENGTH}deg) rotateY(${offset.x * CARD_TILT_STRENGTH}deg)`}}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-brown text-beige transition-transform duration-300 ease-out">
        <h3 className="py-7 text-center">{s.name}</h3>
        <div className="relative h-92 overflow-hidden">
            {hasParallax ? (<>
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
    return (<Link href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 group px-16 lg:px-0">
        <div className="relative aspect-square rounded-2xl overflow-hidden flex flex-col items-center justify-between py-6">
            <Image className="object-cover" src={image} alt={label} fill sizes="500px"/>
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-opacity duration-400 ease-out"/>
            <div className="relative"/>
            <p className="relative text-white leading-tight text-center font-heading text-4xl sm:text-5xl md:text-6xl lg:text-3xl xl:text-4xl 2xl:text-5xl mx-8">{text}</p>
            <div className="relative px-5 py-3 lg:px-4 lg:py-2 xl:px-5 xl:py-3 bg-beige group-hover:bg-orange rounded-full flex items-center gap-0 sm:gap-1 lg:gap-0 xl:gap-1">
                <Icon color="brown" size={35}/>
                <span className="text-brown relative z-10 px-2 font-semibold text-nowrap lg:text-base xl:text-lg text-lg lg:tracking-tight tracking-tight sm:tracking-normal  xl:tracking-normal">{label}</span>
            </div>
        </div>
    </Link>);
}

// todo v. actuel
// function Social({icon: Icon, image, text, label, href}: {icon: typeof InstagramIcon, image: string, text: string, label: string, href: string}) {
//     return (<Link href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 group">
//         <div className="relative aspect-square rounded-2xl overflow-hidden flex flex-col items-center justify-between py-6 text-white">
//             <Image className="object-cover" src={image} alt={label} fill/>
//             <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-opacity duration-400 ease-out"/>
//             <div className="relative"/>
//             <p className="relative text-center font-heading text-5xl mx-8">{text}</p>
//             <div className="relative flex items-center justify-center">
//                 <div className="relative z-10 px-2 py-1">
//                     <Icon color="white" size={40}/>
//                 </div>
//                 <span className="relative z-10 px-2 font-semibold">{label}</span>
//                 <span className="absolute rounded-sm inset-0 origin-left scale-x-0 bg-orange transition-transform duration-300 ease-out group-hover:scale-x-100"/>
//             </div>
//         </div>
//     </Link>);
// }
