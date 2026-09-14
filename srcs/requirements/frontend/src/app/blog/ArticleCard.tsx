import Image from "next/image";
import Link from "next/link";
import {CalendarIcon} from "@/components/Icons";
import {iArticle} from "@/types/api";

export function formatArticleDate(date: string) {
    return new Date(date).toLocaleDateString("fr-FR", {day: "numeric", month: "long", year: "numeric"});
}

export default function ArticleCard({article}: {article: iArticle}) {
    return (<Link href={`/blog/${article.slug}`} className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-bbrown hover:border-orange transition-colors duration-200">
        <div className="relative w-full h-56 shrink-0 bg-bbrown">
            {article.cover_image && <Image className="object-cover" src={article.cover_image} alt={article.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"/>}
        </div>
        <div className="flex-1 flex flex-col gap-3 p-6">
            <h3 className="uppercase text-brown">{article.title}</h3>
            <p className="text-brown h-full">{article.extrait}</p>
            <div className="flex items-center justify-between">
                <span className="text-brown group-hover:text-orange font-semibold">Lire la suite</span>
                <div className="mt-auto pt-2 flex items-center gap-2 text-brown text-sm opacity-80">
                    <CalendarIcon color="brown" size={14}/>
                    <span>{formatArticleDate(article.created_at)}</span>
                </div>
            </div>
        </div>
    </Link>);
}
