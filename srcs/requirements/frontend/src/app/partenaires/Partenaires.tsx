'use client';

import Image from 'next/image';
import {useState} from 'react';
import {usePartenaires} from "@/services/get.service";
import SmallText from "@/components/SmallText";
import {SecondaryButton} from "@/components/Buttons";
import {iPartenaire} from "@/types/api";
import Link from "next/link";

export default function Partenaires() {
    const {data: categories, isLoading} = usePartenaires();
    const [openId, setOpenId] = useState<number>();

    return (<div className="nav-offset space-y-12 md:space-y-18">
        <div className="container mx-auto px-8 text-center max-w-4xl pt-12 md:pt-18">
            <h1 className="text-brown mb-6">Partenaires</h1>
            <p className="text-brown">
                Je travaille avec des partenaires locaux de confiance qui partagent mes valeurs et mon attachement au territoire. Voici ceux qui m&apos;accompagnent au quotidien.
            </p>
        </div>

        <div className="container mx-auto px-5 flex flex-col gap-10 md:gap-16">
            {isLoading && <SmallText>Chargement...</SmallText>}
            {categories?.map((cat) => (<div key={cat.id}>
                <h3 className="text-brown mb-4 md:mb-6 text-center">{cat.name}</h3>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
                    {cat.partenaires.map((p) => (
                        <PartenaireCard key={p.id} partenaire={p} isOpen={openId === p.id} onToggle={() => setOpenId(openId === p.id ? undefined : p.id)}/>
                    ))}
                </div>
            </div>))}
            {!isLoading && categories?.length === 0 && <SmallText>Aucun partenaire disponible</SmallText>}
        </div>

        <section className="relative flex items-center justify-center overflow-hidden h-100">
            <Image className="object-cover" src="/images/illustrations/Presentation-illustration.jpg" alt="Devenir partenaire d'Anima Terra" fill/>
            <div className="absolute inset-0 bg-black-image"/>
            <div className="relative z-10 container mx-auto px-5 text-center text-white">
                <h3 className="mb-6">Envie de collaborer, contactez-moi !</h3>
                <SecondaryButton href="/contact" raison="Collaboration commerciale">Contactez-moi</SecondaryButton>
            </div>
        </section>
    </div>);
}

function PartenaireCard({partenaire, isOpen, onToggle}: {partenaire: iPartenaire, isOpen: boolean, onToggle: () => void}) {
    return (<div className="flex flex-col gap-4 p-5 w-90 bg-beige text-brown rounded-2xl">
        <Link href={partenaire.url} target="_blank" className="relative h-22 w-full">
            <Image className="object-contain" src={partenaire.image} alt={partenaire.name} fill/>
        </Link>
        <div className={"overflow-hidden transition-[max-height] duration-400 ease-in-out " + (isOpen ? "max-h-96" : "max-h-16")}>
            <p className="text-base md:text-sm">{partenaire.description}</p>
        </div>
        <button onClick={onToggle} className="self-end hover:text-orange font-bold tracking-wide">
            {isOpen ? "Voir moins" : "Voir la suite"}
        </button>
    </div>);
}
