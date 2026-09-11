import type {Metadata} from 'next';
import Contact from './Contact';

export const metadata: Metadata = {
    title: 'Contact - Anima Terra : Spéléologie dans les Hautes-Alpes',
    description: 'Contactez Anima Terra par téléphone ou via le formulaire pour une réservation, un renseignement ou toute autre demande sur les sorties spéléologie dans les Hautes-Alpes.',
};

export default function Page() {
    return <Contact/>;
}
