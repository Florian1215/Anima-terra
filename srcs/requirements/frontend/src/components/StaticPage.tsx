"use client";

import {usePage} from "@/services/get.service";
import SmallText from "@/components/SmallText";

export default function StaticPage({slug}: {slug: string}) {
    const {data: page, isLoading, isError} = usePage(slug);

    if (isLoading || isError || !page)
        return (<div className="nav-offset py-32 text-center"><SmallText>{isLoading ? "Chargement..." : "Cette page n'est pas disponible pour le moment"}</SmallText></div>);

    return (<div className="nav-offset py-12 md:py-18">
        <div className="container mx-auto px-8 text-center mb-10 md:mb-14">
            <h1 className="text-brown">{page.title}</h1>
        </div>

        <div className="container mx-auto px-5 max-w-7xl">
            <div className="html-content" dangerouslySetInnerHTML={{__html: page.content}}/>
        </div>
    </div>);
}
