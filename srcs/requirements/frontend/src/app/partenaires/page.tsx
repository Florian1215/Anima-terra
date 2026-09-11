import type {Metadata} from 'next';
import Partenaires from './Partenaires';

export const metadata: Metadata = {
    title: 'Partenaires - Anima Terra : Spéléologie dans les Hautes-Alpes',
    description: 'Découvrez les partenaires locaux de confiance qui accompagnent Anima Terra dans ses sorties spéléologie dans les Hautes-Alpes.',
};

export default function Page() {
    return <Partenaires/>;
}
