'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import {usePartenaires} from "@/services/get.service";
import SmallText from "@/components/SmallText";
import {iPartenaire} from "@/types/api";

export default function Partenaires() {
    const {data: categories, isLoading} = usePartenaires();
    const [openId, setOpenId] = useState<number>();

    return (<div className="nav-offset">
        <div className="container mx-auto px-5 text-center max-w-2xl py-20">
            <h1 className="text-brown mb-6">Partenaires</h1>
            <p className="text-black/80">
                Je travaille avec des partenaires locaux de confiance qui partagent mes valeurs et mon attachement au territoire. Voici ceux qui m&apos;accompagnent au quotidien.
            </p>
        </div>

        <div className="container mx-auto px-5 flex flex-col gap-16">
            {isLoading && <SmallText>Chargement...</SmallText>}
            {categories?.map((cat) => (<div key={cat.id}>
                <h3 className="text-brown mb-6 text-center">{cat.name}</h3>
                <div className="flex gap-6 justify-center">
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
                <Link href={`/contact?raison=${encodeURIComponent('Collaboration commerciale')}`} className="inline-block bg-beige text-brown font-semibold px-8 py-3 rounded-full hover:bg-orange transition-colors duration-200">Contactez-moi</Link>
            </div>
        </section>
    </div>);
}

function PartenaireCard({partenaire, isOpen, onToggle}: {partenaire: iPartenaire, isOpen: boolean, onToggle: () => void}) {
    return (<div className="flex flex-col gap-4 p-5 w-90">
        <div className="relative h-16 w-full">
            <Image className="object-contain" src={partenaire.image} alt={partenaire.name} fill/>
        </div>
        <div className={"overflow-hidden transition-[max-height] duration-300 ease-in-out " + (isOpen ? "max-h-96" : "max-h-[4.5rem]")}>
            <p className="text-brown text-sm">{partenaire.description}</p>
        </div>
        <button onClick={onToggle} className="self-end text-brown hover:text-orange text-xs font-bold tracking-wide">
            {isOpen ? "Voir moins" : "Voir la suite"}
        </button>
    </div>);
}
