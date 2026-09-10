import Home from "@/app/PageAcceuil";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Page d\'accueil - Anima Terra : Spéléologie dans les Hautes-Alpes',
    description: 'Découvrez la spéléologie dans les Hautes-Alpes avec Anima Terra. Des sorties découverte, sportives et d\'envergure pour tous les niveaux.',
};


export default function Page() {
    return <Home/>;
}
