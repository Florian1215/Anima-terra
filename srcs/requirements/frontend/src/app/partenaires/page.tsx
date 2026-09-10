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

    return (<div className="py-16">
        <div className="container mx-auto px-5 text-center max-w-2xl mb-16">
            <h1 className="text-brown mb-6">Partenaires</h1>
            <p className="text-black/80">
                Je travaille avec des partenaires locaux de confiance qui partagent mes valeurs et mon attachement au territoire. Voici ceux qui m&apos;accompagnent au quotidien.
            </p>
        </div>

        <div className="container mx-auto px-5 flex flex-col gap-16">
            {isLoading && <SmallText>Chargement...</SmallText>}
            {categories?.map((cat) => (<div key={cat.id}>
                <h2 className="text-orange mb-6">{cat.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    {cat.partenaires.map((p) => (
                        <PartenaireCard key={p.id} partenaire={p} isOpen={openId === p.id} onToggle={() => setOpenId(openId === p.id ? undefined : p.id)}/>
                    ))}
                </div>
            </div>))}
            {!isLoading && categories?.length === 0 && <SmallText>Aucun partenaire disponible</SmallText>}
        </div>

        <section className="relative mt-24 py-24 flex items-center justify-center overflow-hidden">
            <Image className="object-cover" src="/images/illustrations/Presentation-illustration.jpg" alt="Devenir partenaire d'Anima Terra" fill/>
            <div className="absolute inset-0 bg-black/60"/>
            <div className="relative z-10 container mx-auto px-5 text-center text-white">
                <h2 className="mb-6">Envie de collaborer, contactez-moi !</h2>
                <Link href="/contact" className="inline-block bg-beige text-brown font-semibold px-8 py-3 rounded-full hover:bg-orange transition-colors duration-200">
                    Contactez-moi
                </Link>
            </div>
        </section>
    </div>);
}

function PartenaireCard({partenaire, isOpen, onToggle}: {partenaire: iPartenaire, isOpen: boolean, onToggle: () => void}) {
    return (<div className="flex flex-col gap-3 bg-white rounded-lg border border-black/10 p-5">
        <div className="relative h-16 w-full">
            <Image className="object-contain" src={partenaire.image} alt={partenaire.name} fill/>
        </div>
        <p className={"text-black/70 text-sm" + (isOpen ? "" : " line-clamp-3")}>{partenaire.description}</p>
        <button onClick={onToggle} className="self-end text-orange text-xs font-bold uppercase tracking-wide hover:underline cursor-pointer">
            {isOpen ? "Voir moins" : "Voir la suite"}
        </button>
    </div>);
}
