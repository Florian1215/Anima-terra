'use client';

import {useState} from 'react';
import Link from 'next/link';
import {useSorties} from "@/services/get.service";
import {ArrowDownIcon, CloseIcon, MenuIcon} from "@/components/Icons";
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
    const [openDropdown, setOpenDropdown] = useState<number>();
    const [mobileOpen, setMobileOpen] = useState(false);

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

    const closeMobile = () => {
        setMobileOpen(false);
        setOpenDropdown(undefined);
    };

    return (<>
        <nav className="hidden lg:flex items-center gap-20">
            {menuItems.map((item, index) => <NavItem key={index} func={() => toggleDropdown(index)} item={item}/>)}
        </nav>

        <button aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)} className="lg:hidden flex items-center justify-center p-2 cursor-pointer">
            {mobileOpen ? <CloseIcon/> : <MenuIcon/>}
        </button>

        {mobileOpen && (<div className="lg:hidden fixed inset-x-0 top-30 bottom-0 bg-brown z-30 overflow-y-auto">
            <nav className="flex flex-col px-5 py-6">
                {menuItems.map((item, index) => (
                    <MobileNavItem key={index} item={item} isOpen={openDropdown === index} onToggle={() => toggleDropdown(index)} onNavigate={closeMobile}/>
                ))}
            </nav>
        </div>)}
    </>);
}

function NavItem({func, item}: {func: () => void, item: iMenu}) {
    const [hover, setHover] = useState(false);
    const btnClass = "group-hover:text-orange text-lg flex items-center gap-1";

    if (item.contactBtn)
        return <ReserverButton border={true}/>;
    return (<div className="relative hover:cursor-pointer group" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {item.href && <Link href={item.href} className={btnClass}>{item.label}</Link>}
        {item.submenu && <>
            <button className={btnClass + " space-x-1"} onClick={func}>
                <span>{item.label}</span>
                <ArrowDownIcon color={hover ? "orange" : "beige"}/>
            </button>
            <div className="absolute top-full -left-6 px-2 mt-2 py-4 bg-beige rounded-sm text-brown opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {item.submenu.map((subitem, subindex) => (
                    <Link key={subindex} href={subitem.href} className="block font-semibold pl-4 pr-6 py-2 hover:text-orange text-nowrap">{subitem.label}</Link>
                ))}
                {item.submenu.length === 0 && <SmallText>Aucune sortie disponible</SmallText>}
            </div>
        </>}
    </div>)
}

function MobileNavItem({item, isOpen, onToggle, onNavigate}: {item: iMenu, isOpen: boolean, onToggle: () => void, onNavigate: () => void}) {
    if (item.contactBtn)
        return (<div className="pt-4">
            <ReserverButton border={true} onClick={onNavigate} className="w-full justify-center"/>
        </div>);

    if (item.submenu)
        return (<div className="border-b border-bbeige">
            <button onClick={onToggle} className="w-full flex items-center justify-between py-4 text-beige text-lg font-semibold">
                <span>{item.label}</span>
                <span className={"transition-transform duration-200" + (isOpen ? " rotate-180" : "")}>
                    <ArrowDownIcon color="beige"/>
                </span>
            </button>
            {isOpen && (<div className="flex flex-col pb-4 pl-4 gap-1">
                {item.submenu.map((subitem, subindex) => (
                    <Link key={subindex} href={subitem.href} onClick={onNavigate} className="py-2 text-light-beige hover:text-orange transition-colors duration-200 text-nowrap">{subitem.label}</Link>
                ))}
                {item.submenu.length === 0 && <SmallText className="text-beige">Aucune sortie disponible</SmallText>}
            </div>)}
        </div>);

    return (<Link href={item.href!} onClick={onNavigate} className="block py-4 border-b border-bbeige text-beige text-lg font-semibold hover:text-orange transition-colors duration-200">
        {item.label}
    </Link>);
}
