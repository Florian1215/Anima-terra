import type {Metadata} from 'next';
import GaleriePhoto from './GaleriePhoto';

export const metadata: Metadata = {
    title: 'Galerie photo - Anima Terra : Spéléologie dans les Hautes-Alpes',
    description: 'Découvrez en images les sorties spéléologie d\'Anima Terra dans les Hautes-Alpes : grottes, gouffres et exploration souterraine.',
};

export default function Page() {
    return <GaleriePhoto/>;
}
