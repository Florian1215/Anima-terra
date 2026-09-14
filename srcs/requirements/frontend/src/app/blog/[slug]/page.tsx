import type {Metadata} from 'next';
import apiClient from '@/services/apiClient';
import {iArticleDetail} from '@/types/api';
import Article from './Article';

const DEFAULT_METADATA: Metadata = {
    title: 'Blog - Anima Terra : Spéléologie dans les Hautes-Alpes',
    description: 'Retrouvez les articles du blog d\'Anima Terra : récits de sorties, actualités et coulisses de la spéléologie dans les Hautes-Alpes.',
};

function excerptFromHtml(html: string, maxLength = 160) {
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()}...` : text;
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
    const {slug} = await params;

    try {
        const article = await apiClient<iArticleDetail>(`articles/${slug}/`);
        return {
            title: `${article.title} - Anima Terra : Spéléologie dans les Hautes-Alpes`,
            description: excerptFromHtml(article.content),
        };
    } catch {
        return DEFAULT_METADATA;
    }
}

export default function Page() {
    return <Article/>;
}
