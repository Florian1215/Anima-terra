export const metadata = {
  title: 'Conditions Générales de Vente - Anima Terra',
  description: 'Conditions générales de vente d\'Anima Terra.',
};

export default function ConditionsGeneralesDeVente() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-5 text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-secondary mb-4">
            Conditions Générales de Vente
          </h1>
          <p className="text-lg text-secondary/90">
            Dernière mise à jour : Septembre 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="font-heading text-2xl text-primary mb-4">1. Objet</h2>
              <p className="text-text/80">
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles
                entre Anima Terra, entreprise individuelle d'accompagnement en spéléologie, et ses clients.
                Toute réservation implique l'acceptation sans réserve des présentes CGV.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl text-primary mb-4">2. Réservations</h2>
              <h3 className="font-heading text-xl text-primary mb-3">2.1 Modalités</h3>
              <p className="text-text/80 mb-4">
                Les réservations peuvent être effectuées par téléphone, email ou via le formulaire de contact
                du site internet. Une réservation est considérée comme confirmée après validation par
                Anima Terra et réception d'un email de confirmation.
              </p>
              <h3 className="font-heading text-xl text-primary mb-3">2.2 Délai</h3>
              <p className="text-text/80">
                Il est recommandé de réserver au minimum 48 heures avant la date souhaitée. Les réservations
                de dernière minute seront acceptées dans la mesure du possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl text-primary mb-4">3. Tarifs et paiement</h2>
              <h3 className="font-heading text-xl text-primary mb-3">3.1 Tarifs</h3>
              <p className="text-text/80 mb-4">
                Les tarifs sont indiqués en euros TTC. Ils comprennent l'encadrement par un guide diplômé
                d'État, la fourniture du matériel technique et l'assurance responsabilité civile
                professionnelle.
              </p>
              <h3 className="font-heading text-xl text-primary mb-3">3.2 Modes de paiement</h3>
              <p className="text-text/80 mb-4">
                Le paiement peut être effectué par carte bancaire, chèque, virement bancaire ou espèces.
                Le règlement intervient au plus tard le jour de la prestation.
              </p>
              <h3 className="font-heading text-xl text-primary mb-3">3.3 Bons cadeaux</h3>
              <p className="text-text/80">
                Les bons cadeaux sont valables 1 an à compter de la date d'achat. Ils sont nominatifs
                mais peuvent être transférés. Ils ne sont ni remboursables ni échangeables contre leur
                valeur monétaire.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl text-primary mb-4">4. Annulation et modification</h2>
              <h3 className="font-heading text-xl text-primary mb-3">4.1 Par le client</h3>
              <p className="text-text/80 mb-4">
                • Annulation plus de 48h avant : gratuite, remboursement intégral<br/>
                • Annulation entre 48h et 24h avant : retenue de 50% du montant<br/>
                • Annulation moins de 24h avant : aucun remboursement
              </p>
              <h3 className="font-heading text-xl text-primary mb-3">4.2 Par Anima Terra</h3>
              <p className="text-text/80 mb-4">
                Anima Terra se réserve le droit d'annuler ou de reporter une sortie pour des raisons de
                sécurité (conditions météorologiques, effectif insuffisant, problème technique).
                Dans ce cas, le client sera remboursé intégralement ou pourra reporter sa sortie.
              </p>
              <h3 className="font-heading text-xl text-primary mb-3">4.3 Modification</h3>
              <p className="text-text/80">
                Toute demande de modification de date doit être effectuée au moins 48h avant la sortie
                et sera acceptée dans la mesure du possible, sans frais supplémentaires.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl text-primary mb-4">5. Obligations du client</h2>
              <h3 className="font-heading text-xl text-primary mb-3">5.1 Condition physique</h3>
              <p className="text-text/80 mb-4">
                Le client doit s'assurer qu'il possède les capacités physiques nécessaires pour la
                sortie choisie. En cas de doute, il doit consulter son médecin.
              </p>
              <h3 className="font-heading text-xl text-primary mb-3">5.2 Mineurs</h3>
              <p className="text-text/80 mb-4">
                Les mineurs doivent être accompagnés d'un adulte responsable ou présenter une autorisation
                parentale. Un certificat médical peut être demandé.
              </p>
              <h3 className="font-heading text-xl text-primary mb-3">5.3 Respect des consignes</h3>
              <p className="text-text/80">
                Le client s'engage à respecter les consignes de sécurité données par le guide et à
                adopter un comportement responsable. Le non-respect des consignes peut entraîner
                l'interruption de la sortie sans remboursement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl text-primary mb-4">6. Responsabilité et assurance</h2>
              <h3 className="font-heading text-xl text-primary mb-3">6.1 Assurance professionnelle</h3>
              <p className="text-text/80 mb-4">
                Anima Terra dispose d'une assurance responsabilité civile professionnelle couvrant
                son activité d'accompagnement en spéléologie.
              </p>
              <h3 className="font-heading text-xl text-primary mb-3">6.2 Assurance individuelle</h3>
              <p className="text-text/80 mb-4">
                Il est fortement recommandé aux clients de souscrire une assurance individuelle
                accident couvrant la pratique de la spéléologie.
              </p>
              <h3 className="font-heading text-xl text-primary mb-3">6.3 Limitation de responsabilité</h3>
              <p className="text-text/80">
                La responsabilité d'Anima Terra ne peut être engagée en cas d'accident résultant du
                non-respect des consignes de sécurité ou d'une faute du client.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl text-primary mb-4">7. Propriété intellectuelle</h2>
              <p className="text-text/80">
                Tous les contenus du site internet (textes, photos, logos) sont la propriété d'Anima Terra
                et sont protégés par le droit d'auteur. Toute reproduction sans autorisation est interdite.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl text-primary mb-4">8. Protection des données personnelles</h2>
              <p className="text-text/80">
                Les données personnelles collectées sont utilisées uniquement dans le cadre de la gestion
                des réservations et ne sont pas transmises à des tiers. Conformément au RGPD, vous disposez
                d'un droit d'accès, de rectification et de suppression de vos données.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl text-primary mb-4">9. Litiges</h2>
              <p className="text-text/80">
                En cas de litige, une solution amiable sera recherchée en priorité. À défaut, le tribunal
                compétent sera celui du lieu du siège social d'Anima Terra.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl text-primary mb-4">10. Contact</h2>
              <p className="text-text/80">
                Pour toute question concernant les présentes CGV :<br/>
                <strong>Email :</strong> contact@animaterra.fr<br/>
                <strong>Téléphone :</strong> +33 6 12 34 56 78
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
