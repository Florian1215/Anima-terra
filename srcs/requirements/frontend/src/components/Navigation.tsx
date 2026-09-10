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

    return (<nav className="hidden lg:flex items-center gap-20">
            {menuItems.map((item, index) => <NavItem key={index} func={() => toggleDropdown(index)} item={item}/>)}
    </nav>);
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
