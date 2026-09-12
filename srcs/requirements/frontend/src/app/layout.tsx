import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ReactNode} from "react";
import QueryProviders from "@/hooks/providers";

export const metadata: Metadata = {
    title: "Anima Terra - Spéléologie dans les Hautes-Alpes",
    description: "Découvrez la spéléologie dans les Hautes-Alpes avec Anima Terra. Des sorties découverte, sportives et d'envergure pour tous les niveaux.",
};

export default function RootLayout({children}: {children: ReactNode}) {
    return (<html lang="fr">
        <body>
            <QueryProviders>
                <div className="bg-white fixed text-black left-0 top-0 z-50 size-20 flex items-center justify-center">
                    <p className="hidden sm:block md:hidden">sm</p>
                    <p className="hidden md:block lg:hidden">md</p>
                    <p className="hidden lg:block xl:hidden">lg</p>
                    <p className="hidden xl:block 2xl:hidden">xl</p>
                    <p className="hidden 2xl:block">2xl</p>
                </div>
                <Header />
                <main>{children}</main>
                <Footer />
            </QueryProviders>
        </body>
    </html>);
}
