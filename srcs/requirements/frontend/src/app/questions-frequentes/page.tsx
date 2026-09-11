import type {Metadata} from 'next';
import QuestionsFrequentes from './QuestionsFrequentes';

export const metadata: Metadata = {
    title: 'Questions fréquentes - Anima Terra : Spéléologie dans les Hautes-Alpes',
    description: 'Retrouvez les réponses aux questions les plus fréquentes sur les sorties spéléologie proposées par Anima Terra dans les Hautes-Alpes.',
};

export default function Page() {
    return <QuestionsFrequentes/>;
}
