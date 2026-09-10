import {PhoneIcon} from "@/components/Icons";
import Link from "next/link";
import {useState} from "react";

export function ReserverButton({label="Réserver"}: {label?: string}) {
    const [hover, setHover] = useState(false);

    return (<Link href="/contact" onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)}
                  className="flex items-center gap-2 rounded-full border-2 border-beige px-5 py-3 group hover:bg-orange hover:text-brown hover:border-orange">
        <div className="transition-transform duration-200 group-hover:animate-[ring_0.5s_ease-in-out_infinite]">
            <PhoneIcon size={20} color={hover ? "brown" : "beige"}/>
        </div>
        <span className="font-bold">{label}</span>
    </Link>)
}
