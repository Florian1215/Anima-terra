import type {Metadata} from 'next';
import Presentation from './Presentation';

export const metadata: Metadata = {
    title: 'Présentation - Anima Terra : Spéléologie dans les Hautes-Alpes',
    description: 'Découvrez le parcours et la passion de Guillaume, guide de spéléologie dans les Hautes-Alpes.',
};

export default function Page() {
    return <Presentation/>;
}
