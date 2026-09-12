'use client';

import Link from 'next/link';
import {useSorties} from "@/services/get.service";
import {ArrowDownIcon} from "@/components/Icons";

interface iFooterLink {
    label: string
    href: string
}

export default function Footer() {
    const {data: sorties} = useSorties();
    const currentYear = new Date().getFullYear();

    const plusLinks: iFooterLink[] = [
        {label: 'Présentation', href: '/presentation'},
        {label: 'Questions fréquentes', href: '/questions-frequentes'},
        {label: 'Bon cadeau', href: '/bon-cadeau'},
        {label: 'Blog', href: '/blog'},
    ];

    const mentionsLinks: iFooterLink[] = [
        {label: 'Partenaires', href: '/partenaires'},
        {label: 'CGV', href: '/conditions-generales-de-vente'},
        {label: 'Mentions Légales', href: '/mentions-legales'},
        {label: 'Contact', href: '/contact'},
    ];

    return (<footer className="bg-brown text-beige">
        <div className="container mx-auto px-12 py-16">
            <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20">
                <FooterColumn title="Les sorties" links={sorties ? sorties.map(s => ({label: s.name, href: `/${s.slug}`})) : []}/>
                <FooterColumn title="Plus" links={plusLinks}/>
                <div>
                    <Link href="/galerie-photo" className="font-semibold text-beige hover:text-orange transition-colors duration-200">Galerie photo</Link>
                </div>
                <FooterColumn title="Mentions" links={mentionsLinks} className="md:ml-auto"/>
            </div>
        </div>
        <div className="border-t border-bbeige py-4">
            <p className="text-center text-sm text-light-beige">Copyright &copy; {currentYear}, Tous droits réservés anima-terra</p>
        </div>
    </footer>);
}

function FooterColumn({title, links, className = ''}: {title: string, links: iFooterLink[], className?: string}) {
    return (<div className={`flex flex-col gap-3 ${className}`}>
        <div className="flex items-center gap-2">
            <span className="font-semibold text-beige">{title}</span>
            <ArrowDownIcon size={10} color="beige"/>
        </div>
        <ul className="flex flex-col gap-1">
            {links.map((link) => (<li key={link.href} className="border-b border-bbeige pb-1">
                <Link href={link.href} className="text-light-beige hover:text-orange transition-colors duration-200">{link.label}</Link>
            </li>))}
        </ul>
    </div>);
}
