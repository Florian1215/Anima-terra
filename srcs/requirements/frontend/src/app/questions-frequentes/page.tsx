'use client';

import Link from 'next/link';
import {useEffect, useRef, useState} from 'react';
import {useQuestions} from "@/services/get.service";
import SmallText from "@/components/SmallText";
import {iQuestion} from "@/types/api";

export default function QuestionsFrequentes() {
    const {data: categories, isLoading} = useQuestions();
    const [selectedCatId, setSelectedCatId] = useState<number>();
    const [openQuestionId, setOpenQuestionId] = useState<number>();

    const activeCategory = categories?.find((c) => c.id === selectedCatId) ?? categories?.[0];

    const selectCategory = (id: number) => {
        setSelectedCatId(id);
        setOpenQuestionId(undefined);
    };

    return (<div className="py-16">
        <div className="container mx-auto px-5 text-center max-w-3xl">
            <h1 className="text-brown mb-6">Une question ? La réponse est surement ici</h1>
            <p className="text-black/80 mb-16">
                Normalement, toutes les informations dont vous avez besoin se trouvent ici. Je vous invite donc à parcourir cette rubrique. Si toutefois certaines questions restent sans réponse, n&apos;hésitez pas à me joindre via le formulaire de contact.
            </p>
        </div>

        <div className="container mx-auto px-5">
            <div className="flex flex-col md:flex-row gap-12">
                <nav className="md:w-64 shrink-0 flex flex-col gap-6">
                    {isLoading && <SmallText>Chargement...</SmallText>}
                    {categories?.map((cat) => {
                        const isActive = activeCategory?.id === cat.id;
                        return (<button key={cat.id} onClick={() => selectCategory(cat.id)} className={"flex items-center gap-3 text-left transition-colors duration-200" + (isActive ? " text-brown font-bold" : " text-black/40 hover:text-black/70")}>
                            {isActive && <span className="w-1 h-6 bg-brown shrink-0"/>}
                            {cat.name}
                        </button>);
                    })}
                    {!isLoading && categories?.length === 0 && <SmallText>Aucune question disponible</SmallText>}
                </nav>

                <div className="flex-1">
                    <div className="flex flex-col divide-y divide-black/5 rounded-lg overflow-hidden">
                        {activeCategory?.questions.map((q) => (
                            <FaqItem key={q.id} q={q} isOpen={openQuestionId === q.id} onToggle={() => setOpenQuestionId(openQuestionId === q.id ? undefined : q.id)}/>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-end items-center gap-8 mt-16">
                        <h2 className="text-brown">Encore une question ?</h2>
                        <Link href="/contact" className="inline-block border-2 border-brown text-brown font-semibold px-6 py-3 rounded-full hover:bg-brown hover:text-beige transition-colors duration-200">
                            Contactez-moi
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

function FaqItem({q, isOpen, onToggle}: {q: iQuestion, isOpen: boolean, onToggle: () => void}) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) setHeight(contentRef.current.scrollHeight);
    }, [q.reponse]);

    return (<div>
        <button onClick={onToggle} className={"w-full flex items-center gap-4 px-6 py-4 text-left transition-colors duration-200" + (isOpen ? " bg-orange text-white" : " bg-beige text-brown hover:bg-orange/20")}>
            <span className="text-xl leading-none w-4 shrink-0">{isOpen ? '−' : '+'}</span>
            <span className="flex-1 font-semibold">{q.question}</span>
            <span className={"shrink-0 transition-transform duration-300 ease-in-out" + (isOpen ? " rotate-90" : "")}>›</span>
        </button>
        <div style={{maxHeight: isOpen ? height : 0}} className="overflow-hidden transition-[max-height] duration-300 ease-in-out">
            <div ref={contentRef} className="px-6 py-5 bg-white text-black/80">
                <p>{q.reponse}</p>
            </div>
        </div>
    </div>);
}
