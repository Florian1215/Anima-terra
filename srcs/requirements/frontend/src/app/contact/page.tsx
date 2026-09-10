'use client';

import {ChangeEvent, FormEvent, useState} from 'react';

const RAISONS = [
    'Demande de réservation',
    'Demande de renseignement',
    'Demande personnalisée ou projet spécifique',
    'Modifier ou annuler une réservation',
    'Demande concernant les photos d’une sortie',
    'Réclamation ou retour d’expérience',
    'Signaler un problème technique sur le site',
    'Question relative aux données personnelles RGPD',
    'Autre (à préciser dans le message)',
];

interface iFormData {
    nom: string
    email: string
    telephone: string
    raison: string
    message: string
}

const inputClass = "w-full px-4 py-3 bg-beige text-brown rounded-md focus:outline-none focus:ring-2 focus:ring-orange";

export default function Contact() {
    const [formData, setFormData] = useState<iFormData>({nom: '', email: '', telephone: '', raison: '', message: ''});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Pas d'endpoint de contact côté API pour le moment
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return (<div className="py-16">
        <div className="container mx-auto px-5 text-center py-16">
            <h1 className="text-brown mb-4">Réservation &amp; renseignement par téléphone :</h1>
            <a href="tel:+33650118725" className="block text-brown text-5xl md:text-6xl font-bold hover:text-orange transition-colors duration-200">
                06 50 11 87 25
            </a>
        </div>

        <div className="container mx-auto px-5">
            <div className="bg-brown px-6 py-12 md:px-16">
                <h2 className="text-beige text-center mb-10">Formulaire de contact</h2>
                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex flex-col gap-6">
                    <div>
                        <label htmlFor="nom" className="block text-beige font-semibold mb-2">
                            Nom <span className="text-red-500">*</span>
                        </label>
                        <input type="text" id="nom" name="nom" required value={formData.nom} onChange={handleChange} className={inputClass}/>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-beige font-semibold mb-2">
                            E-mail <span className="text-red-500">*</span>
                        </label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass}/>
                    </div>

                    <div>
                        <label htmlFor="telephone" className="block text-beige font-semibold mb-2">
                            Téléphone <span className="text-red-500">*</span>
                        </label>
                        <input type="tel" id="telephone" name="telephone" required value={formData.telephone} onChange={handleChange} className={inputClass}/>
                    </div>

                    <div>
                        <label htmlFor="raison" className="block text-beige font-semibold mb-2">
                            Sélectionnez la raison de votre message : <span className="text-red-500">*</span>
                        </label>
                        <select id="raison" name="raison" required value={formData.raison} onChange={handleChange} className={inputClass + " font-semibold"}>
                            <option value="" disabled>--- Sélectionner un choix ---</option>
                            {RAISONS.map((raison) => (<option key={raison} value={raison}>{raison}</option>))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-beige font-semibold mb-2">
                            Votre message :
                        </label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} className={inputClass}/>
                    </div>

                    <div className="flex items-center gap-4">
                        <button type="submit" className="bg-beige text-brown font-semibold px-8 py-3 rounded-full hover:bg-orange transition-colors duration-200 cursor-pointer">
                            Envoyer
                        </button>
                        {submitted && <span className="text-beige">Merci, votre message a bien été envoyé !</span>}
                    </div>
                </form>
            </div>
        </div>

        <p className="text-center italic text-black/70 mt-8">
            Dans la mesure du possible, merci de privilégier le contact par téléphone.
        </p>
    </div>);
}
