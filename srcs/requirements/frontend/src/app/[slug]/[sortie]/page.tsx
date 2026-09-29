import type {Metadata} from 'next';
import apiClient from '@/services/apiClient';
import {iSortieCat} from '@/types/api';
import Sortie from './Sortie';

const DEFAULT_METADATA: Metadata = {
    title: 'Sorties - Anima Terra : Spéléologie dans les Hautes-Alpes',
    description: 'Découvrez les sorties spéléologie proposées par Anima Terra dans les Hautes-Alpes.',
};

export async function generateMetadata({params}: {params: Promise<{slug: string, sortie: string}>}): Promise<Metadata> {
    const {slug, sortie: sortieSlug} = await params;

    try {
        const categories = await apiClient<iSortieCat[]>('sorties/');
        const sortie = categories.find((c) => c.slug === slug)?.sorties.find((s) => s.slug === sortieSlug);
        if (!sortie)
            return DEFAULT_METADATA;

        return {
            title: `${sortie.title} - Anima Terra : Spéléologie dans les Hautes-Alpes`,
            description: sortie.subtitle || sortie.description,
        };
    } catch {
        return DEFAULT_METADATA;
    }
}

export default function Page() {
    return <Sortie/>;
}
