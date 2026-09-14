import type {Metadata} from 'next';
import StaticPage from '@/components/StaticPage';

export const metadata: Metadata = {
    title: 'Mentions légales - Anima Terra : Spéléologie dans les Hautes-Alpes',
    description: 'Consultez les mentions légales d\'Anima Terra.',
};

export default function Page() {
    return <StaticPage slug="mentions-legales"/>;
}
