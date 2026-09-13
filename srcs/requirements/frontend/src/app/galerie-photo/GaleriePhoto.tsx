"use client";

import {useEffect, useState} from "react";
import Image from "next/image";
import {usePhotos} from "@/services/get.service";
import SmallText from "@/components/SmallText";
import {iPhotos} from "@/types/api";

const DEPARTEMENTS: Record<string, string> = {
    "01": "Ain", "02": "Aisne", "03": "Allier", "04": "Alpes-de-Haute-Provence", "05": "Hautes-Alpes",
    "06": "Alpes-Maritimes", "07": "Ardèche", "08": "Ardennes", "09": "Ariège", "10": "Aube",
    "11": "Aude", "12": "Aveyron", "13": "Bouches-du-Rhône", "14": "Calvados", "15": "Cantal",
    "16": "Charente", "17": "Charente-Maritime", "18": "Cher", "19": "Corrèze", "2A": "Corse-du-Sud",
    "2B": "Haute-Corse", "21": "Côte-d'Or", "22": "Côtes-d'Armor", "23": "Creuse", "24": "Dordogne",
    "25": "Doubs", "26": "Drôme", "27": "Eure", "28": "Eure-et-Loir", "29": "Finistère",
    "30": "Gard", "31": "Haute-Garonne", "32": "Gers", "33": "Gironde", "34": "Hérault",
    "35": "Ille-et-Vilaine", "36": "Indre", "37": "Indre-et-Loire", "38": "Isère", "39": "Jura",
    "40": "Landes", "41": "Loir-et-Cher", "42": "Loire", "43": "Haute-Loire", "44": "Loire-Atlantique",
    "45": "Loiret", "46": "Lot", "47": "Lot-et-Garonne", "48": "Lozère", "49": "Maine-et-Loire",
    "50": "Manche", "51": "Marne", "52": "Haute-Marne", "53": "Mayenne", "54": "Meurthe-et-Moselle",
    "55": "Meuse", "56": "Morbihan", "57": "Moselle", "58": "Nièvre", "59": "Nord",
    "60": "Oise", "61": "Orne", "62": "Pas-de-Calais", "63": "Puy-de-Dôme", "64": "Pyrénées-Atlantiques",
    "65": "Hautes-Pyrénées", "66": "Pyrénées-Orientales", "67": "Bas-Rhin", "68": "Haut-Rhin", "69": "Rhône",
    "70": "Haute-Saône", "71": "Saône-et-Loire", "72": "Sarthe", "73": "Savoie", "74": "Haute-Savoie",
    "75": "Paris", "76": "Seine-Maritime", "77": "Seine-et-Marne", "78": "Yvelines", "79": "Deux-Sèvres",
    "80": "Somme", "81": "Tarn", "82": "Tarn-et-Garonne", "83": "Var", "84": "Vaucluse",
    "85": "Vendée", "86": "Vienne", "87": "Haute-Vienne", "88": "Vosges", "89": "Yonne",
    "90": "Territoire de Belfort", "91": "Essonne", "92": "Hauts-de-Seine", "93": "Seine-Saint-Denis", "94": "Val-de-Marne",
    "95": "Val-d'Oise", "971": "Guadeloupe", "972": "Martinique", "973": "Guyane", "974": "La Réunion", "976": "Mayotte",
};

export default function GaleriePhoto() {
    const {data: photos, isLoading} = usePhotos();
    const [selectedIndex, setSelectedIndex] = useState<number>();

    const goPrev = () => setSelectedIndex((i) => (i === undefined || !photos?.length ? i : (i - 1 + photos.length) % photos.length));
    const goNext = () => setSelectedIndex((i) => (i === undefined || !photos?.length ? i : (i + 1) % photos.length));

    useEffect(() => {
        if (selectedIndex === undefined)
            return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedIndex(undefined);
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };
        window.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedIndex, photos?.length]);

    const selected = selectedIndex !== undefined ? photos?.[selectedIndex] : undefined;

    return (<div className="nav-offset">
        {isLoading && <div className="py-16 text-center"><SmallText>Chargement...</SmallText></div>}
        {!isLoading && photos?.length === 0 && <div className="py-16 text-center"><SmallText>Aucune photo disponible</SmallText></div>}
        <div className="p-1 columns-1 sm:columns-2 lg:columns-3 gap-1">
            {photos?.map((photo, index) => (
                <button key={photo.id} onClick={() => setSelectedIndex(index)} className="relative block w-full mb-1 cursor-pointer">
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-200"/>
                    <Image className="w-full h-auto" height={500} width={500} src={photo.image} alt={`Photo dans la grotte ${photo.grotte} en ${photo.departement} par ${photo.auteur}`}/>
                </button>
            ))}
        </div>

        {selected && <PhotoLightbox photo={selected} onClose={() => setSelectedIndex(undefined)} onPrev={goPrev} onNext={goNext} hasMultiple={(photos?.length ?? 0) > 1}/>}
    </div>);
}

function PhotoLightbox({photo, onClose, onPrev, onNext, hasMultiple}: {photo: iPhotos, onClose: () => void, onPrev: () => void, onNext: () => void, hasMultiple: boolean}) {
    const [loaded, setLoaded] = useState(false);
    const date = new Date(photo.date).toLocaleDateString("fr-FR", {day: "numeric", month: "long", year: "numeric"});
    const departement = DEPARTEMENTS[photo.departement] ?? photo.departement;

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoaded(false);
    }, [photo.id]);

    return (<div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center p-4 sm:p-8" onClick={onClose}>
        <button onClick={onClose} aria-label="Fermer" className="absolute top-2 right-2 p-2 sm:top-6 sm:right-6 text-beige text-4xl leading-none hover:text-orange transition-colors duration-200 cursor-pointer z-10">×</button>

        {hasMultiple && (<>
            <button onClick={(e) => {e.stopPropagation(); onPrev();}} aria-label="Photo précédente"
                className="px-4 absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-beige text-4xl sm:text-5xl leading-none hover:text-orange transition-colors duration-200 cursor-pointer z-10">‹</button>
            <button onClick={(e) => {e.stopPropagation(); onNext();}} aria-label="Photo suivante"
                className="px-4 absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-beige text-4xl sm:text-5xl leading-none hover:text-orange transition-colors duration-200 cursor-pointer z-10">›</button>
        </>)}

        <div className="relative w-full flex-1 min-h-0 pointer-events-none" onClick={(e) => e.stopPropagation()}>
            {!loaded && (<div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-4 border-bbeige border-t-orange animate-spin"/>
            </div>)}
            <Image key={photo.id} loading="eager" className={`object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`} src={photo.image} alt={photo.grotte} fill sizes="100vw" quality={90} priority onLoad={() => setLoaded(true)}/>
        </div>

        <div className="mt-4 shrink-0 text-center text-beige" onClick={(e) => e.stopPropagation()}>
            <h3 className="mb-2">{photo.grotte}</h3>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-light-beige">
                <span>{date}</span>
                <span>{photo.auteur}</span>
                <span>{departement}</span>
            </div>
        </div>
    </div>);
}
