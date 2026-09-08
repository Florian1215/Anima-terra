import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Les sorties',
      icon: '🧗',
      links: [
        { label: 'Découverte', href: '/decouverte' },
        { label: 'Sportive', href: '/sportive' },
        { label: 'D\'envergure', href: '/denvergure' },
      ],
    },
    {
      title: 'Plus',
      icon: '➕',
      links: [
        { label: 'Présentation', href: '/presentation' },
        { label: 'Questions fréquentes', href: '/questions-frequentes' },
        { label: 'Bon cadeau', href: '/bon-cadeau' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Informations',
      icon: 'ℹ️',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Galerie photo', href: '/galerie-photo' },
        { label: 'Partenaires', href: '/partenaires' },
        { label: 'Conditions générales de vente', href: '/conditions-generales-de-vente' },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-secondary">
      <div className="container mx-auto px-5 lg:px-8 py-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {footerSections.map((section, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <h3 className="font-heading text-[16px] font-semibold text-secondary">
                  {section.title}
                </h3>
                <span className="text-sm">{section.icon}</span>
              </div>
              <ul className="flex flex-col gap-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="border-b border-secondary/20 pb-2">
                    <Link
                      href={link.href}
                      className="text-secondary text-[14px] hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h3 className="font-heading text-[16px] font-semibold text-secondary">Contact</h3>
              <span className="text-sm">📧</span>
            </div>
            <ul className="flex flex-col gap-2 text-[14px]">
              <li className="border-b border-secondary/20 pb-2">
                <a
                  href="mailto:contact@animaterra.fr"
                  className="text-secondary hover:text-accent transition-colors duration-200"
                >
                  contact@animaterra.fr
                </a>
              </li>
              <li className="border-b border-secondary/20 pb-2">
                <a
                  href="tel:+33612345678"
                  className="text-secondary hover:text-accent transition-colors duration-200"
                >
                  +33 6 12 34 56 78
                </a>
              </li>
              <li className="border-b border-secondary/20 pb-2">
                <span className="text-secondary">Hautes-Alpes, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary/20 pt-6 text-center">
          <p className="text-secondary text-[13px]">
            &copy; {currentYear} Anima Terra - Spéléologie dans les Hautes-Alpes. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
