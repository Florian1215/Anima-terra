import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Mes engagements - Anima Terra : Spéléologie dans les Hautes-Alpes',
    description: 'Les engagements d\'Anima Terra pour une spéléologie responsable dans les Hautes-Alpes.',
};

export default function Page() {
    return (<div className="nav-offset py-12 md:py-20">
        <div className="container mx-auto px-5 text-center">
            <h1 className="text-brown">Mes engagements</h1>
        </div>
    </div>);
}
