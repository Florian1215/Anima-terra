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

    return (<div className="nav-offset py-12 space-y-12 md:space-y-18">
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

        <div className="container mx-auto px-6 xl:px-22 flex flex-col items-center gap-4">
            <h3 className="text-brown">Envie de collaborer, contactez-moi !</h3>
            <SecondaryButton href="/contact" raison="Collaboration commerciale">Contactez-moi</SecondaryButton>
        </div>
    </div>);
}

function PartenaireCard({partenaire, isOpen, onToggle}: {partenaire: iPartenaire, isOpen: boolean, onToggle: () => void}) {
    return (<div className="flex flex-col gap-2 md:gap-4 py-4 px-6 w-90 bg-beige text-brown rounded-2xl">
        <Link href={partenaire.url} target="_blank" className="relative h-22 w-full">
            <Image className="object-contain" src={partenaire.image} alt={`Logo du partenaire ${partenaire.url}`} fill sizes="300px"/>
        </Link>
        <p className={"text-base md:text-sm " + (isOpen ? "" : "line-clamp-3")}>{partenaire.description}</p>
        <button onClick={onToggle} className="self-end hover:text-orange font-semibold">
            {isOpen ? "Voir moins" : "Voir la suite"}
        </button>
    </div>);
}
