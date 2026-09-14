"use client";

import {useArticles} from "@/services/get.service";
import SmallText from "@/components/SmallText";
import ArticleCard from "./ArticleCard";

export default function Blog() {
    const {data: articles, isLoading} = useArticles();

    return (<div className="nav-offset py-12 md:py-18">
        <div className="container mx-auto px-8 text-center mb-12 md:mb-16">
            <h1 className="text-brown">Blog</h1>
        </div>

        <div className="container mx-auto px-5">
            {isLoading && <div className="py-16 text-center"><SmallText>Chargement...</SmallText></div>}
            {!isLoading && articles?.length === 0 && <div className="py-16 text-center"><SmallText>Aucun article disponible pour le moment</SmallText></div>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {articles?.map((article) => (<ArticleCard key={article.id} article={article}/>))}
            </div>
        </div>
    </div>);
}
