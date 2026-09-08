'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
  };

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-5 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-secondary mb-4">
            Contact
          </h1>
          <p className="text-xl text-secondary/90">
            Une question ? Besoin de réserver ?
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div>
              <h2 className="font-heading text-3xl text-primary mb-6">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-text font-semibold mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-accent"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-accent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-text font-semibold mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-accent"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-text font-semibold mb-2">
                    Sujet *
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    required
                    value={formData.sujet}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-accent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="reservation">Réservation sortie</option>
                    <option value="information">Demande d'information</option>
                    <option value="bon-cadeau">Bon cadeau</option>
                    <option value="groupe">Sortie de groupe</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-text font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-accent resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Informations */}
            <div>
              <h2 className="font-heading text-3xl text-primary mb-6">
                Informations de contact
              </h2>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📧</div>
                    <div>
                      <h3 className="font-heading text-lg text-primary mb-1">Email</h3>
                      <a href="mailto:contact@animaterra.fr" className="text-accent hover:underline">
                        contact@animaterra.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📱</div>
                    <div>
                      <h3 className="font-heading text-lg text-primary mb-1">Téléphone</h3>
                      <a href="tel:+33612345678" className="text-accent hover:underline">
                        +33 6 12 34 56 78
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h3 className="font-heading text-lg text-primary mb-1">Localisation</h3>
                      <p className="text-text/80">
                        Hautes-Alpes (05)<br />
                        Région Provence-Alpes-Côte d'Azur
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-2xl">⏰</div>
                    <div>
                      <h3 className="font-heading text-lg text-primary mb-1">Horaires</h3>
                      <p className="text-text/80">
                        Disponible 7j/7<br />
                        Réponse sous 24-48h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/20 rounded-lg p-6 mb-6">
                <h3 className="font-heading text-xl text-primary mb-3">Réservation</h3>
                <p className="text-text/80 mb-3">
                  Pour réserver une sortie, merci de nous contacter au moins 48h à l'avance.
                  Les sorties sont confirmées sous réserve de conditions météorologiques favorables.
                </p>
                <p className="text-text/80">
                  <strong>Annulation :</strong> Gratuite jusqu'à 48h avant la sortie.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-heading text-xl text-primary mb-3">Accès</h3>
                <p className="text-text/80 mb-3">
                  <strong>Depuis Gap :</strong> 30 minutes
                </p>
                <p className="text-text/80 mb-3">
                  <strong>Depuis Grenoble :</strong> 1h30
                </p>
                <p className="text-text/80">
                  <strong>Depuis Marseille :</strong> 2h30
                </p>
                <p className="text-text/80 text-sm mt-4">
                  Point de rendez-vous communiqué lors de la réservation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
