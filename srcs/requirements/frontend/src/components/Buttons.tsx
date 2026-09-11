import {PhoneIcon} from "@/components/Icons";
import Link from "next/link";
import {ReactNode, useState} from "react";

export default function Button({children, href, className}: {children: string, href: string, className?: string}) {
    return (<Link href={href} className={"text-beige bg-brown px-8 py-3 font-semibold rounded-full hover:bg-orange hover:text-brown transition-colors duration-150 " + className}>
        {children}
    </Link>);
}

export function SecondaryButton({children, href, className}: {children: ReactNode, href: string, className?: string}) {
    return <Link href={href} className={"bg-beige text-brown px-8 py-3 font-bold rounded-full hover:text-orange transition-colors duration-150 " + className}>{children}</Link>;
}

export function ReserverButton({label="Réserver", bigger=false, border, className}: {label?: string, bigger?: boolean, border?: boolean, className?: string}) {
    const [hover, setHover] = useState(false);

    return (<Link href="/contact" onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)}
                  className={"w-fit text-beige bg-brown flex items-center rounded-full group hover:bg-orange hover:text-brown " + (border ? "border-2 border-beige hover:border-orange " : "") + (bigger ? "text-2xl px-8 py-5 gap-5 " : "px-5 py-3 gap-2 ") + className}>
        <div className="transition-transform duration-200 group-hover:animate-[ring_0.5s_ease-in-out_infinite]">
            <PhoneIcon size={bigger ? 30 : 20} color={hover ? "brown" : "beige"}/>
        </div>
        <span className="font-bold">{label}</span>
    </Link>)
}
