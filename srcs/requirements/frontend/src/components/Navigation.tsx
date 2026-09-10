'use client';

import {useState} from 'react';
import Link from 'next/link';
import {useSorties} from "@/services/get.service";
import {ArrowDownIcon} from "@/components/Icons";
import SmallText from "@/components/SmallText";
import {ReserverButton} from "@/components/Buttons";

interface iMenu {
    label: string
    submenu?: {
        label: string
        href: string
    }[]
    href?: string
    contactBtn?: boolean
}

export default function Navigation() {
    const {data: sorties} = useSorties();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<number>();

    const menuItems: iMenu[] = [
        {
            label: 'Les sorties',
            submenu: sorties ? sorties.map(i => {return {label: i.name, href: `/${i.slug}`}}) : [],
        },
        {
            label: 'Plus',
            submenu: [
                { label: 'Présentation', href: '/presentation' },
                { label: 'Questions fréquentes', href: '/questions-frequentes' },
                { label: 'Blog', href: '/blog' },
            ],
        },
        { label: 'Galerie photo', href: '/galerie-photo' },
        { label: 'Réserver', href: '/contact', contactBtn: true},
    ];

    const toggleDropdown = (index: number) => setOpenDropdown(openDropdown === index ? undefined : index);

    return (<>
        <nav className="hidden lg:flex items-center gap-20">
            {menuItems.map((item, index) => <NavItem key={index} func={() => toggleDropdown(index)} item={item}/>)}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <span className={`w-6 h-0.5 bg-secondary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`w-6 h-0.5 bg-secondary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}/>
            <span className={`w-6 h-0.5 bg-secondary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>

        {/* Mobile Navigation */}
        {/*<div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-primary shadow-2xl z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>*/}
        {/*    <button className="absolute top-4 right-4 text-secondary text-3xl" onClick={() => setIsMenuOpen(false)}>*/}
        {/*        &times;*/}
        {/*    </button>*/}
        {/*    <nav className="flex flex-col pt-16 px-6">*/}
        {/*        {menuItems.map((item, index) => (*/}
        {/*            <div key={index}>*/}
        {/*                {item.submenu ? (*/}
        {/*                    <>*/}
        {/*                        <button*/}
        {/*                            className="w-full text-left py-3 text-secondary border-b border-secondary/20 flex items-center justify-between"*/}
        {/*                            onClick={() => toggleDropdown(index)}*/}
        {/*                        >*/}
        {/*                            {item.label}*/}
        {/*                            <svg*/}
        {/*                                className={`w-4 h-4 transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`}*/}
        {/*                                fill="none"*/}
        {/*                                stroke="currentColor"*/}
        {/*                                viewBox="0 0 24 24"*/}
        {/*                            >*/}
        {/*                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />*/}
        {/*                            </svg>*/}
        {/*                        </button>*/}
        {/*                        {openDropdown === index && (*/}
        {/*                            <div className="pl-4">*/}
        {/*                                {item.submenu.map((subitem, subindex) => (*/}
        {/*                                    <Link*/}
        {/*                                        key={subindex}*/}
        {/*                                        href={subitem.href}*/}
        {/*                                        className="block py-2 text-secondary/80 hover:text-accent transition-colors duration-200"*/}
        {/*                                        onClick={() => setIsMenuOpen(false)}*/}
        {/*                                    >*/}
        {/*                                        {subitem.label}*/}
        {/*                                    </Link>*/}
        {/*                                ))}*/}
        {/*                            </div>*/}
        {/*                        )}*/}
        {/*                    </>*/}
        {/*                ) : (*/}
        {/*                    <Link*/}
        {/*                        href={item.href}*/}
        {/*                        className="block py-3 text-secondary border-b border-secondary/20 hover:text-accent transition-colors duration-200"*/}
        {/*                        onClick={() => setIsMenuOpen(false)}*/}
        {/*                    >*/}
        {/*                        {item.label}*/}
        {/*                    </Link>*/}
        {/*                )}*/}
        {/*            </div>*/}
        {/*        ))}*/}
        {/*    </nav>*/}
        {/*</div>*/}

        {isMenuOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)}/>}
    </>);
}

function NavItem({func, item}: {func: () => void, item: iMenu}) {
    const [hover, setHover] = useState(false);
    const btnClass = "group-hover:text-orange text-lg flex items-center gap-1";

    if (item.contactBtn)
        return <ReserverButton/>;
    return (<div className={"relative hover:cursor-pointer group border-b-2 border-brown" + (!item.contactBtn ? " hover:border-orange" : "")} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {item.href && <Link href={item.href} className={btnClass}>{item.label}</Link>}
        {item.submenu && <>
            <button className={btnClass + " space-x-1"} onClick={func}>
                <span>{item.label}</span>
                <ArrowDownIcon color={hover ? "orange" : "beige"}/>
            </button>
            <div className="absolute top-full left-0 mt-2 py-2 bg-beige rounded-sm text-brown opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {item.submenu.map((subitem, subindex) => (
                    <Link key={subindex} href={subitem.href} className="block px-4 py-2 text-brown hover:text-orange hover:underline hover:underline-offset-4 hover:underline-orange text-nowrap">{subitem.label}</Link>
                ))}
                {item.submenu.length === 0 && <SmallText>Aucune sortie disponible</SmallText>}
            </div>
            {/*<div className="absolute top-full left-0 mt-2 py-2 w-48 bg-primary shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">*/}
            {/*    {item.submenu.map((subitem, subindex) => (*/}
            {/*        <Link*/}
            {/*            key={subindex}*/}
            {/*            href={subitem.href}*/}
            {/*            className="block px-4 py-2 text-secondary hover:text-accent hover:bg-[#5a4a37] transition-colors duration-200"*/}
            {/*        >*/}
            {/*            {subitem.label}*/}
            {/*        </Link>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </>}
    </div>)
}
