import React from "react";

export default function SmallText({children, className}: {children: React.ReactNode, className?: string}) {
    return <p className={"px-4 py-2 text-sm italic text-nowrap " + className}>{children}</p>;
}
