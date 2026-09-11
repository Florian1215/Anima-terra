import type {Metadata} from 'next';
import apiClient from '@/services/apiClient';
import {iSortieCat} from '@/types/api';
import SortieCategorie from './SortieCategorie';

const DEFAULT_METADATA: Metadata = {
    title: 'Sorties - Anima Terra : Spéléologie dans les Hautes-Alpes',
    description: 'Découvrez les sorties spéléologie proposées par Anima Terra dans les Hautes-Alpes.',
};

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
    const {slug} = await params;

    try {
        const categories = await apiClient<iSortieCat[]>('sorties/');
        const categorie = categories.find((c) => c.slug === slug);
        if (!categorie)
            return DEFAULT_METADATA;

        return {
            title: `${categorie.name} - Anima Terra : Spéléologie dans les Hautes-Alpes`,
            description: categorie.description,
        };
    } catch {
        return DEFAULT_METADATA;
    }
}

export default function Page() {
    return <SortieCategorie/>;
}
