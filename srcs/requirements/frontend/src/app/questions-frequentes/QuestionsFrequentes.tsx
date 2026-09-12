"use client";

import {useEffect, useRef, useState} from "react";
import {useQuestions} from "@/services/get.service";
import SmallText from "@/components/SmallText";
import {iQuestion} from "@/types/api";
import {ChevronIcon} from "@/components/Icons";
import {SecondaryButton} from "@/components/Buttons";

export default function QuestionsFrequentes() {
    const {data: categories, isLoading} = useQuestions();
    const [selectedCatId, setSelectedCatId] = useState<number>();
    const [openQuestionId, setOpenQuestionId] = useState<number>();

    const activeCategory = categories?.find((c) => c.id === selectedCatId) ?? categories?.[0];

    const selectCategory = (id: number) => {
        setSelectedCatId(id);
        setOpenQuestionId(undefined);
    };

    return (<div className="nav-offset py-16 space-y-16">
        <div className="container mx-auto px-5 text-center max-w-6xl space-y-8">
            <h2 className="px-24 text-brown">Une question ? La réponse est surement ici</h2>
            <p className="text-black">
                Normalement, toutes les informations dont vous avez besoin se trouvent ici. Je vous invite donc à parcourir cette rubrique. Si toutefois certaines questions restent sans réponse, n&apos;hésitez pas à me joindre via le formulaire de contact.
            </p>
        </div>

        <div className="container mx-auto px-22">
            <div className="flex flex-col md:flex-row gap-12">
                <nav className="md:w-98 shrink-0 flex flex-col gap-6">
                    {isLoading && <SmallText>Chargement...</SmallText>}
                    {categories?.map((cat) => {
                        const isActive = activeCategory?.id === cat.id;
                        return (<button key={cat.id} onClick={() => selectCategory(cat.id)} className={"flex items-center gap-3 text-left transition-colors duration-200" + (isActive ? " text-brown font-bold" : " text-brown/50 hover:text-orange")}>
                            {isActive && <span className="w-1.5 h-full bg-brown shrink-0"/>}
                            <h4 className="py-1">{cat.name}</h4>
                        </button>);
                    })}
                    {!isLoading && categories?.length === 0 && <SmallText>Aucune question disponible</SmallText>}
                </nav>

                <div className="flex-1 rounded-lg">
                    <div className="flex flex-col divide-y border border-bbrown divide-bbrown overflow-hidden rounded-lg">
                        {activeCategory?.questions.map((q) => (
                            <FaqItem key={q.id} q={q} isOpen={openQuestionId === q.id} onToggle={() => setOpenQuestionId(openQuestionId === q.id ? undefined : q.id)}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-5 flex flex-col items-end gap-4">
            <h3 className="text-brown">Encore une question ?</h3>
            <SecondaryButton href="/contact" raison="Demande de renseignement">Contactez-moi</SecondaryButton>
        </div>
    </div>);
}

function FaqItem({q, isOpen, onToggle}: {q: iQuestion, isOpen: boolean, onToggle: () => void}) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        if (contentRef.current)
            setHeight(contentRef.current.scrollHeight);
    }, [q.reponse]);

    return (<div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <button onClick={onToggle} className={"w-full flex items-center gap-4 px-6 py-4 text-left transition-colors duration-200" + (isOpen ? " bg-orange text-brown" : " bg-beige text-brown hover:text-ember")}>
            <span className="flex-1 font-semibold">{q.question}</span>
            <span className={"transition-transform duration-300 ease-in-out" + (isOpen ? " rotate-90" : "")}><ChevronIcon color={isOpen ? "brown" : (isHover ? "ember" : "brown")}/></span>
        </button>
        <div style={{maxHeight: isOpen ? height : 0}} className="overflow-hidden transition-[max-height] duration-300 ease-in-out">
            <div ref={contentRef} className="px-6 py-5 bg-white text-brown">
                <p>{q.reponse}</p>
            </div>
        </div>
    </div>);
}
