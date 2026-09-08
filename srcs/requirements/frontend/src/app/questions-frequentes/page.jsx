'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function QuestionsFréquentes() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Général',
      questions: [
        {
          q: 'Qu\'est-ce que la spéléologie ?',
          a: 'La spéléologie est l\'exploration et l\'étude des cavités souterraines naturelles. C\'est à la fois une activité sportive, scientifique et de loisir qui permet de découvrir un monde souterrain fascinant.',
        },
        {
          q: 'Faut-il une expérience préalable ?',
          a: 'Non, nos sorties découverte sont accessibles aux débutants complets. Le guide s\'adapte au niveau du groupe et fournit toutes les explications nécessaires.',
        },
        {
          q: 'À partir de quel âge peut-on faire de la spéléo ?',
          a: 'Les sorties découverte sont accessibles dès 6 ans. Les sorties sportives à partir de 12 ans, et les sorties d\'envergure nécessitent d\'être adulte et d\'avoir de l\'expérience.',
        },
      ],
    },
    {
      category: 'Équipement',
      questions: [
        {
          q: 'Quel équipement est fourni ?',
          a: 'Nous fournissons tout l\'équipement technique : casque avec éclairage, combinaison, baudrier (pour les sorties sportives), et tout le matériel de sécurité (cordes, mousquetons, etc.).',
        },
        {
          q: 'Que dois-je apporter ?',
          a: 'Prévoyez des vêtements chauds (polaire, sous-vêtements techniques), des chaussures de randonnée montantes, de l\'eau et une petite collation. Un sac pour mettre vos affaires sales après la sortie est également recommandé.',
        },
        {
          q: 'Puis-je utiliser mon propre matériel ?',
          a: 'Oui, si vous possédez votre propre matériel homologué et en bon état, vous pouvez l\'utiliser. Merci de nous en informer lors de la réservation.',
        },
      ],
    },
    {
      category: 'Réservation et tarifs',
      questions: [
        {
          q: 'Comment réserver une sortie ?',
          a: 'Vous pouvez réserver par téléphone, email ou via notre formulaire de contact. Une réservation au moins 48h à l\'avance est recommandée.',
        },
        {
          q: 'Quels sont les modes de paiement acceptés ?',
          a: 'Nous acceptons les paiements par carte bancaire, chèque, virement ou espèces. Le paiement peut être effectué avant ou après la sortie.',
        },
        {
          q: 'Puis-je annuler ma réservation ?',
          a: 'Oui, l\'annulation est gratuite jusqu\'à 48h avant la sortie. En cas d\'annulation tardive, 50% du montant sera retenu. En cas de conditions météo défavorables, la sortie peut être reportée sans frais.',
        },
        {
          q: 'Proposez-vous des tarifs de groupe ?',
          a: 'Oui, nous proposons des tarifs dégressifs pour les groupes à partir de 6 personnes. Contactez-nous pour un devis personnalisé.',
        },
      ],
    },
    {
      category: 'Sécurité',
      questions: [
        {
          q: 'La spéléologie est-elle dangereuse ?',
          a: 'Comme toute activité de montagne, la spéléologie comporte des risques. Cependant, avec un encadrement professionnel, du matériel homologué et le respect des consignes de sécurité, les risques sont minimisés.',
        },
        {
          q: 'Que se passe-t-il en cas d\'accident ?',
          a: 'Le guide est formé aux premiers secours (PSE2) et dispose d\'un téléphone satellite pour alerter les secours si nécessaire. Nous disposons également d\'une assurance RC professionnelle.',
        },
        {
          q: 'Y a-t-il des contre-indications médicales ?',
          a: 'La claustrophobie, les problèmes cardiaques graves, respiratoires ou articulaires peuvent être des contre-indications. En cas de doute, consultez votre médecin avant la sortie.',
        },
      ],
    },
    {
      category: 'Conditions',
      questions: [
        {
          q: 'Quelle est la meilleure saison ?',
          a: 'La spéléologie se pratique toute l\'année. Cependant, le printemps et l\'automne sont les saisons idéales, avec des températures extérieures agréables. L\'été est aussi très prisé.',
        },
        {
          q: 'Fait-il froid dans les grottes ?',
          a: 'La température dans les grottes est constante toute l\'année, généralement entre 5 et 10°C. C\'est pourquoi nous fournissons des combinaisons et recommandons des vêtements chauds en dessous.',
        },
        {
          q: 'Et s\'il pleut ?',
          a: 'Une pluie légère ne pose pas de problème. En revanche, en cas de fortes pluies ou d\'orages, certaines grottes peuvent être dangereuses et la sortie sera reportée.',
        },
      ],
    },
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-5 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-secondary mb-4">
            Questions Fréquentes
          </h1>
          <p className="text-xl text-secondary/90">
            Tout ce que vous devez savoir
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-4xl">
          <p className="text-center text-text/80 mb-12">
            Vous avez des questions ? Nous avons les réponses ! Si vous ne trouvez pas
            la réponse à votre question, n'hésitez pas à nous contacter.
          </p>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="font-heading text-3xl text-primary mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-accent rounded"></span>
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const index = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openIndex === index;
                    return (
                      <div key={questionIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary/10 transition-colors"
                        >
                          <span className="font-heading text-lg text-primary pr-4">
                            {faq.q}
                          </span>
                          <svg
                            className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-secondary/5 border-t border-secondary/20">
                            <p className="text-text/80">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-accent/10 rounded-lg p-8">
            <h3 className="font-heading text-3xl text-primary mb-4">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-text/80 mb-6">
              N'hésitez pas à nous contacter, nous serons ravis de vous répondre
            </p>
            <Button href="/contact" variant="primary">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
