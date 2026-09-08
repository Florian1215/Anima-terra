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
                <Header />
                <main>{children}</main>
                <Footer />
            </QueryProviders>
        </body>
    </html>);
}
