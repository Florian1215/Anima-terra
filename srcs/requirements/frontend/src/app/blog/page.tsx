import type {Metadata} from 'next';
import Blog from './Blog';

export const metadata: Metadata = {
    title: 'Blog - Anima Terra : Spéléologie dans les Hautes-Alpes',
    description: 'Retrouvez les articles du blog d\'Anima Terra : récits de sorties, actualités et coulisses de la spéléologie dans les Hautes-Alpes.',
};

export default function Page() {
    return <Blog/>;
}
