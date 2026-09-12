'use client';

import {PhoneIcon} from "@/components/Icons";
import Link from "next/link";
import {ButtonHTMLAttributes, ReactNode, useState} from "react";

function withRaison(href: string, raison?: string) {
    if (!raison) return href;
    return `${href}${href.includes('?') ? '&' : '?'}raison=${encodeURIComponent(raison)}`;
}

export type ButtonVariant = "primary" | "secondary" | "outline";

const BASE_CLASS = "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-semibold transition-colors duration-150";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
    primary: "bg-brown text-beige hover:bg-orange hover:text-brown",
    secondary: "bg-beige text-brown hover:bg-orange hover:text-brown",
    outline: "border-2 border-beige bg-transparent text-beige hover:border-orange hover:bg-orange hover:text-brown",
};

interface iButtonProps {
    children: ReactNode
    href: string
    raison?: string
    variant?: ButtonVariant
    className?: string
}

export default function Button({children, href, raison, variant = "primary", className = ""}: iButtonProps) {
    return (<Link href={withRaison(href, raison)} className={`${BASE_CLASS} ${VARIANT_CLASS[variant]} ${className}`}>
        {children}
    </Link>);
}

export function SecondaryButton({children, href, raison, className = ""}: Omit<iButtonProps, "variant">) {
    return <Button href={href} raison={raison} variant="secondary" className={className}>{children}</Button>;
}

interface iSubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export function SubmitButton({children, className = "", ...props}: iSubmitButtonProps) {
    return (<button type="submit" className={`${BASE_CLASS} ${VARIANT_CLASS.secondary} cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${className}`} {...props}>
        {children}
    </button>);
}

export function ReserverButton({label = "Réserver", bigger = false, border, raison = "Demande de réservation", onClick, className = ""}: {label?: string, bigger?: boolean, border?: boolean, raison?: string, onClick?: () => void, className?: string}) {
    const [hover, setHover] = useState(false);

    return (<Link href={withRaison("/contact", raison)} onClick={onClick} onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)}
                  className={`w-fit flex items-center rounded-full group transition-colors duration-150 ${border ? VARIANT_CLASS.outline : VARIANT_CLASS.primary} ${bigger ? "text-2xl px-8 py-5 gap-5" : "px-5 py-3 gap-2"} ${className}`}>
        <div className="transition-transform duration-200 group-hover:animate-[ring_0.5s_ease-in-out_infinite]">
            <PhoneIcon size={bigger ? 30 : 20} color={hover ? "brown" : "beige"}/>
        </div>
        <span className="font-bold">{label}</span>
    </Link>);
}
