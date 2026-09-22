"use client";

import Image from "next/image";
import {redirect, useParams} from "next/navigation";
import {useArticle, useArticles} from "@/services/get.service";
import SmallText from "@/components/SmallText";
import {TextButton} from "@/components/Buttons";
import {CalendarIcon, PeopleIcon} from "@/components/Icons";
import ArticleCard, {formatArticleDate} from "../ArticleCard";
import {iArticle} from "@/types/api";
import React from "react";

export default function Article() {
    const {slug} = useParams<{slug: string}>();
    const {data: article, isLoading, isError} = useArticle(slug);
    const {data: articles} = useArticles();

    if (isLoading)
        return (<div className="nav-offset py-32 text-center"><SmallText>Chargement...</SmallText></div>);

    if (isError || !article)
        redirect("/blog");

    const recentArticles = (articles ?? [])
        .filter((a) => a.slug !== slug)
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 3);

    return (<div className="pb-16 md:pb-24">
        <div className="relative w-full h-150 sm:h-180 md:h-220 overflow-hidden bg-bbrown">
            <Image className="object-cover object-center" src={article.image} alt={article.title} fill priority sizes="100vw"/>
            <div className="absolute inset-0 bg-black-image"/>
            <div className="absolute nav-offset left-4 top-2 sm:top-8 sm:left-8 z-10">
                <TextButton href="/blog" className="inline-flex items-center gap-2 text-white p-2">← Retour au blog</TextButton>
            </div>
        </div>

        <div className="container mx-auto px-3 pb-6">
            <div className="relative z-10 -mt-105 sm:-mt-125 md:-mt-160 max-w-7xl mx-auto bg-white rounded-3xl md:rounded-4xl px-8 sm:px-16 md:px-20 pt-10 sm:pt-14 md:pb-4 md:shadow-xl xl:shadow-2xl">
                <h1 className="text-brown text-center mb-4 md:mb-6">{article.title}</h1>
                <div className="flex flex-wrap items-center justify-start md:justify-center gap-x-6 gap-y-2 text-brown font-semibold mb-4 md:mb-10">
                    <DataInfo Icon={CalendarIcon}>{formatArticleDate(article.created_at)}</DataInfo>
                    {article.participants.length > 0 && <DataInfo Icon={PeopleIcon}>{article.participants.map((a) => a.name).join(', ')}</DataInfo>}
                </div>

                <div className="html-content" dangerouslySetInnerHTML={{__html: article.content}}/>
                {article.authors.length > 0 && (
                    <p className="text-brown text-sm italic text-right mt-4 md:mb-8">
                        Écrit par {article.authors.map((p) => p.name).join(', ')}
                    </p>
                )}
            </div>
        </div>

        {recentArticles.length > 0 && (<div className="container mx-auto px-5 mt-8 md:mt-16">
            <h3 className="text-brown text-center mb-6 md:mb-10">Les articles récents</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {recentArticles.map((a: iArticle) => (<ArticleCard key={a.id} article={a}/>))}
            </div>
        </div>)}
    </div>);
}

function DataInfo({children, Icon}: {children: React.ReactNode, Icon: typeof CalendarIcon}) {
    return (<span className="flex items-center text-sm sm:text-base gap-2"><Icon color="brown" size={22}/>{children}</span>)
}