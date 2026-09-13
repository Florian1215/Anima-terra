"use client";

import Image from "next/image";
import {usePresentation} from "@/services/get.service";
import SmallText from "@/components/SmallText";
import Button from "@/components/Buttons";
import {iPresentation} from "@/types/api";

const CURRENT_YEAR = new Date().getFullYear();

export default function Presentation() {
    const {data: etapes, isLoading} = usePresentation();

    return (<div className="nav-offset py-12 md:py-20">
        <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-12">
            <div className="xl:ml-12 text-brown">
                <h1 className="mb-6">Présentation</h1>
                <h3 className="mb-4">Une passion née sous terre, devenue mon métier</h3>
                <p className="mb-6">Depuis tout jeune, je suis fasciné par le monde souterrain. Ce qui n&apos;était au départ qu&apos;une curiosité est devenu une véritable vocation : accompagner, transmettre, partager et faire découvrir un milieu exceptionnel dans le respect et la sécurité.</p>
                <p className="mb-8">Voici les grandes étapes de mon parcours, qui m&apos;ont mené jusqu&apos;à aujourd&apos;hui.</p>
                <p className="italic text-3xl font-semibold mb-10">Guillaume</p>
                <Button href="/mes-engagements">Mes engagements</Button>
            </div>

            <div>
                {isLoading && <SmallText>Chargement...</SmallText>}
                {!isLoading && etapes?.length === 0 && <SmallText>Aucune étape disponible pour le moment</SmallText>}
                {etapes && etapes.length > 0 && <Frise etapes={etapes}/>}
            </div>
        </div>
    </div>);
}

function Frise({etapes}: {etapes: iPresentation[]}) {
    return (<ol className="relative flex flex-col gap-10 lg:gap-14 max-w-3xl mx-auto">
        <span aria-hidden className="absolute left-1.75 top-2 bottom-2 w-0.5 bg-orange/30"/>
        {etapes.map((etape) => (<EtapeItem key={etape.id} etape={etape}/>))}
    </ol>);
}

function EtapeItem({etape}: {etape: iPresentation}) {
    const label = etape.year === CURRENT_YEAR ? "Aujourd'hui" : String(etape.year);

    return (<li className="relative pl-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-center">
            <div className="flex-1">
                <div className="relative mb-1">
                    <span aria-hidden className="absolute -left-8 top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-orange"/>
                    <p className="font-heading text-3xl sm:text-4xl text-brown">{label}</p>
                </div>
                <p className="font-semibold text-brown mb-2">{etape.titre}</p>
                <p className="text-brown">{etape.description}</p>
            </div>
            <div className="relative w-full h-44 sm:w-56 sm:h-32 lg:w-64 lg:h-36 shrink-0 rounded-xl overflow-hidden">
                <Image className="object-cover" src={etape.image} alt={etape.titre} fill/>
            </div>
        </div>
    </li>);
}
