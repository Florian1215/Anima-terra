"use client"

import {ReactNode, useEffect, useState} from "react";
import {useSorties} from "@/services/get.service";
import Image from "next/image";
import Link from "next/link";
import {FacebookIcon, InstagramIcon, PhoneIcon, YoutubeIcon} from "@/components/Icons";
import {iSortieCat} from "@/types/api";


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
    const {data: sorties} = useSorties();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVisible(true);
    }, []);

    return (<div>
            <section className="relative h-180 flex items-center justify-center overflow-hidden bg-cover bg-fixed"
            style={{
                backgroundImage: "url('/images/heroes/Bandeau-accueil-illustration.jpg')",
                backgroundPosition: "0px 800px",
            }}>
                <div className="absolute inset-0 size-full bg-black-image z-20"/>
                <div className="relative z-20 container mx-auto px-12 text-center">
                    <h1 className={"text-white transition-all duration-700 ease-out" + (visible ? " translate-y-0 opacity-100" : " -translate-y-8 opacity-0")}>Une aventure inoubliable vous attend sous les montagnes des Hautes-Alpes</h1>
                </div>
            </section>

            <SectionItems titre="Les sorties">
                {sorties?.map((item) => (<Sortie key={item.id} s={item}/>))}
            </SectionItems>

            <SectionItems titre="Réseaux sociaux">
                {socials.map((social) => (<Social key={social.label} {...social}/>))}
            </SectionItems>

            <section className="relative py-32 flex items-center justify-center overflow-hidden">
                <Image className="object-cover" src="/images/heroes/Bandeau-accueil-illustration.jpg" alt="La magie souterraine en images" fill/>
                <div className="absolute inset-0 size-full bg-black/60 z-10"/>
                <div className="relative z-10 container mx-auto px-5 text-center text-white">
                    <h2 className="mb-4">La magie souterraine en images</h2>
                    <p className="max-w-xl mx-auto mb-8 text-white/90">Retrouvez ici mes photos et celles de mes coéquipiers, souvenirs précieux de nos aventures.</p>
                    <Link href="/galerie-photo" className="inline-block bg-beige text-brown font-semibold px-8 py-3 rounded-full hover:bg-orange transition-colors duration-200">
                        Voir la galerie
                    </Link>
                </div>
            </section>

            <section className="py-20 text-center">
                <div className="container mx-auto px-5">
                    <h2 className="text-brown mb-8">Et si votre prochaine aventure se vivait sous terre ?</h2>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-brown text-beige font-semibold px-8 py-4 rounded-full hover:bg-orange hover:text-brown transition-colors duration-200">
                        <PhoneIcon color="beige" size={18}/>
                        Réserver
                    </Link>
                </div>
            </section>
        </div>
    );
}

function SectionItems({children, titre}: {children: ReactNode, titre: string}) {
    return (<section className="py-20">
        <div className="container mx-auto px-5">
            <h2 className="text-center text-brown mb-12">{titre}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {children}
            </div>
        </div>
    </section>);
}

function Sortie({s}: {s: iSortieCat}) {
    return (<Link href={`/${s.slug}`} className="group flex flex-col rounded-2xl overflow-hidden bg-brown text-beige">
        <div className="py-5 text-center">
            <h3 className="text-beige">{s.name}</h3>
        </div>
        <div className="relative h-92 overflow-hidden">
            <Image className="object-cover" src={s.image} alt={`Image sortie ${s.name}`} fill/>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between gap-6 px-6 py-6 text-center">
            <p className="text-beige/90 text-sm">{s.description}</p>
            <span className="font-bold group-hover:text-orange transition-colors duration-200">Voir les sorties →</span>
        </div>
    </Link>);
}

function Social({icon: Icon, image, text, label, href}: {icon: typeof InstagramIcon, image: string, text: string, label: string, href: string}) {
    return (<div className="flex flex-col gap-4">
        <div className="relative aspect-3/2 rounded-2xl overflow-hidden flex items-center justify-center">
            <Image className="object-cover" src={image} alt={label} fill/>
            <div className="absolute inset-0 bg-black-image"/>
            <p className="relative text-center text-beige font-heading text-4xl mx-8">{text}</p>
        </div>
        <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-orange transition-colors duration-200">
            <Icon color="brown" size={40}/>
            <span className="bg-orange text-brown font-semibold px-3 py-1 rounded">{label}</span>
        </Link>
    </div>);
}
