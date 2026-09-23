"use client";

import {MouseEvent, useCallback, useState} from "react";
import ImageModal from "@/components/ImageModal";

export default function HtmlContent({html}: {html: string}) {
    const [preview, setPreview] = useState<{title: string, src: string} | null>(null);
    const closePreview = useCallback(() => setPreview(null), []);

    const onClick = (e: MouseEvent<HTMLDivElement>) => {
        const link = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[data-image-preview]");
        if (!link) return;
        e.preventDefault();
        setPreview({title: link.dataset.title ?? link.textContent ?? "", src: link.href});
    };

    return (<>
        <div className="html-content" onClick={onClick} dangerouslySetInnerHTML={{__html: html}}/>
        {preview && <ImageModal title={preview.title} src={preview.src} onClose={closePreview}/>}
    </>);
}
