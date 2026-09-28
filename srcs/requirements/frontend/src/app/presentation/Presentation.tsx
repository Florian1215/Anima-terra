"use client";

import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {usePresentation} from "@/services/get.service";
import SmallText from "@/components/SmallText";
import Button from "@/components/Buttons";
import {iPresentation} from "@/types/api";

const CURRENT_YEAR = new Date().getFullYear();

export default function Presentation() {
    const {data: etapes, isLoading} = usePresentation();

    return (<div className="nav-offset py-12 md:py-20">
        <div className="container mx-auto px-5 space-y-12">
            <div className="text-brown text-center max-w-4xl mx-auto">
                <div className="lg:top-30">
                    <h1 className="mb-6">Présentation</h1>
                    <h3 className="mb-4">Une passion née sous terre, devenue mon métier</h3>
                    <p className="mb-6">Depuis tout jeune, je suis fasciné par le monde souterrain. Ce qui n&apos;était au départ qu&apos;une curiosité est devenu une véritable vocation : accompagner, transmettre, partager et faire découvrir un milieu exceptionnel dans le respect et la sécurité.</p>
                </div>
            </div>

            <div>
                {isLoading && <SmallText>Chargement...</SmallText>}
                {!isLoading && etapes?.length === 0 && <SmallText>Aucune étape disponible pour le moment</SmallText>}
                {etapes && etapes.length > 0 && <Frise etapes={etapes}/>}
            </div>
            <div>
                {isLoading && <SmallText>Chargement...</SmallText>}
                {!isLoading && etapes?.length === 0 && <SmallText>Aucune étape disponible pour le moment</SmallText>}
                {etapes && etapes.length > 0 && <FriseSticky etapes={etapes}/>}
            </div>
            <div className="text-brown text-center max-w-4xl mx-auto">
                <p className="mb-8">Voici les grandes étapes de mon parcours, qui m&apos;ont mené jusqu&apos;à aujourd&apos;hui.</p>
                <p className="italic text-3xl font-semibold mb-10">Guillaume</p>
                <Button href="/mes-engagements">Mes engagements</Button>
            </div>
        </div>
    </div>);
}

function Frise({etapes}: {etapes: iPresentation[]}) {
    const [lineRef, lineVisible] = useInView<HTMLSpanElement>();

    return (<ol className="relative flex flex-col gap-10 lg:gap-14 max-w-4xl mx-auto">
        <span ref={lineRef} aria-hidden
              className={"absolute left-1.75 top-2 bottom-2 w-0.5 bg-orange/30 origin-top transition-transform duration-1000 ease-out " + (lineVisible ? "scale-y-100" : "scale-y-0")}/>
        {etapes.map((etape, index) => (<EtapeItem key={etape.id} etape={etape} index={index}/>))}
    </ol>);
}

function EtapeItem({etape, index}: {etape: iPresentation, index: number}) {
    const [ref, visible] = useInView<HTMLLIElement>();
    const base = Math.min(index, 4) * 100;
    const label = etape.year === CURRENT_YEAR ? "Aujourd'hui" : String(etape.year);

    return (<li ref={ref} className="relative pl-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-center">
            <div className="flex-1">
                <div className="relative mb-1">
                    <span aria-hidden style={{transitionDelay: `${base}ms`}}
                          className={"absolute -left-8 top-1/2 -translate-y-1/2 size-4 rounded-full bg-orange transition-transform duration-500 ease-out " + (visible ? "scale-100" : "scale-0")}/>
                    <p style={{transitionDelay: `${base}ms`}}
                       className={"font-heading text-3xl sm:text-4xl text-brown transition-opacity duration-700 ease-out " + (visible ? "opacity-100" : "opacity-0")}>{label}</p>
                </div>
                <p style={{transitionDelay: `${base + 100}ms`}}
                   className={"font-semibold text-brown mb-2 transition-opacity duration-700 ease-out " + (visible ? "opacity-100" : "opacity-0")}>{etape.title}</p>
                <p style={{transitionDelay: `${base + 150}ms`}}
                   className={"text-brown transition-opacity duration-700 ease-out " + (visible ? "opacity-100" : "opacity-0")}>{etape.description}</p>
            </div>
            <div className="relative w-full h-44 sm:w-56 sm:h-32 lg:w-64 lg:h-36 shrink-0 rounded-xl overflow-hidden">
                <Image style={{transitionDelay: `${base + 100}ms`}}
                       className={"object-cover transition-[opacity,transform] duration-700 ease-out " + (visible ? "opacity-100 scale-100" : "opacity-0 scale-110")}
                       src={etape.image} alt={etape.title} fill sizes="250px"/>
            </div>
        </div>
    </li>);
}

function FriseSticky({etapes}: {etapes: iPresentation[]}) {
    const [ref, progress] = useScrollProgress<HTMLDivElement>();
    const active = Math.min(etapes.length - 1, Math.floor(progress * etapes.length));

    return (<div ref={ref} style={{height: `${etapes.length * 70}svh`}} className="relative">
        <div className="sticky top-30 h-[calc(100svh-7.5rem)] flex items-center">
            <span aria-hidden className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-0.5 bg-orange/30"/>
            <span aria-hidden style={{transform: `scaleY(${progress})`}}
                  className="absolute left-1/2 -translate-x-1/2 top-0 h-1/2 w-0.5 bg-orange origin-top"/>

            <div className="relative w-full max-w-5xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-5 sm:gap-10">
                <div className="h-56 sm:h-64 overflow-hidden">
                    <div style={{transform: `translateY(-${active * 100}%)`}} className="h-full transition-transform duration-700 ease-in-out">
                        {etapes.map((etape, index) => (<EtapeTexte key={etape.id} etape={etape} active={index === active}/>))}
                    </div>
                </div>

                <span aria-hidden className="size-4 rounded-full bg-orange ring-4 ring-orange/20"/>

                <div className="aspect-4/3 w-full rounded-xl overflow-hidden">
                    <div style={{transform: `translateY(-${active * 100}%)`}} className="h-full transition-transform duration-700 ease-in-out">
                        {etapes.map((etape) => (<div key={etape.id} className="relative h-full">
                            <Image src={etape.image} alt={etape.title} fill sizes="(min-width: 1024px) 450px, 45vw" className="object-cover"/>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

function EtapeTexte({etape, active}: {etape: iPresentation, active: boolean}) {
    const label = etape.year === CURRENT_YEAR ? "Aujourd'hui" : String(etape.year);

    return (<div aria-hidden={!active} className="h-full flex flex-col justify-center text-right text-brown">
        <p className="font-heading text-4xl sm:text-6xl mb-2">{label}</p>
        <p className="font-semibold mb-2">{etape.title}</p>
        <p className="text-sm sm:text-base">{etape.description}</p>
    </div>);
}

function useScrollProgress<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        let frame = 0;
        const update = () => {
            frame = 0;
            const rect = node.getBoundingClientRect();
            const sticky = node.firstElementChild as HTMLElement;
            const stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
            const scrollable = rect.height - sticky.offsetHeight;
            setProgress(scrollable > 0 ? Math.min(1, Math.max(0, (stickyTop - rect.top) / scrollable)) : 0);
        };
        const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
        update();
        window.addEventListener("scroll", onScroll, {passive: true});
        window.addEventListener("resize", onScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return [ref, progress] as const;
}

function useInView<T extends Element>(threshold = 0.2) {
    const ref = useRef<T>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            setVisible(true);
            observer.disconnect();
        }, {threshold});
        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, visible] as const;
}
