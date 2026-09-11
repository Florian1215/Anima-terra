import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';

export default function Header() {
    return (<header className="bg-brown text-beige fixed top-0 left-0 right-0 z-40 py-3">
        <div className="flex items-center justify-between px-5 lg:px-12">
            <Link href="/">
                <Image className="h-24 w-auto" src="/images/logos/logo-light.png" alt="Anima Terra - Spéléologie dans les Hautes-Alpes logo" width={200} height={60} priority/>
            </Link>
            <Navigation />
        </div>
    </header>);
}
