import React from "react";

export default function SmallText({children}: {children: React.ReactNode}) {
    return <span className="px-4 py-2 text-sm italic text-nowrap">{children}</span>;
}
