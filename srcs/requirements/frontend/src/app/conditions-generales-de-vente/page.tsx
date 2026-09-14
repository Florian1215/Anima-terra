import type {Metadata} from 'next';
import StaticPage from '@/components/StaticPage';

export const metadata: Metadata = {
    title: 'Conditions générales de vente - Anima Terra : Spéléologie dans les Hautes-Alpes',
    description: 'Consultez les conditions générales de vente d\'Anima Terra.',
};

export default function Page() {
    return <StaticPage slug="cgv"/>;
}
