"use client";

import Image from "next/image";
import {useEffect, useState} from "react";

export default function ImageModal({title, src, onClose}: {title: string, src: string, onClose: () => void}) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (<div role="dialog" aria-modal="true" aria-label={title} className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center p-4 sm:p-8" onClick={onClose}>
        <button onClick={onClose} aria-label="Fermer" className="absolute top-2 right-2 p-2 sm:top-6 sm:right-6 text-beige text-4xl leading-none hover:text-orange transition-colors duration-200 cursor-pointer z-10">×</button>

        <div className="relative w-full flex-1 min-h-0 pointer-events-none">
            {!loaded && (<div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-4 border-bbeige border-t-orange animate-spin"/>
            </div>)}
            <Image loading="eager" className={`object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`} src={src} alt={title} fill sizes="100vw" quality={90} priority onLoad={() => setLoaded(true)}/>
        </div>
    </div>);
}
