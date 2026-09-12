'use client';

import {ChangeEvent, FormEvent, Suspense, useEffect, useState} from 'react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import SmallText from "@/components/SmallText";
import FormField from "@/components/FormField";
import {SubmitButton} from "@/components/Buttons";
import {useContactForm, iContactForm} from "@/services/forms.service";
import {ApiError} from "@/services/apiClient";

const RAISONS = [
    'Demande de réservation',
    'Demande de renseignement',
    'Collaboration commerciale',
    'Demande personnalisée ou projet spécifique',
    'Modifier ou annuler une réservation',
    'Demande concernant les photos d’une sortie',
    'Réclamation ou retour d’expérience',
    'Signaler un problème technique sur le site',
    'Question relative aux données personnelles RGPD',
    'Autre (à préciser dans le message)',
];

const EMPTY_FORM: iContactForm = {nom: '', email: '', telephone: '', raison: '', message: ''};

export default function Contact() {
    return (<Suspense>
        <ContactForm/>
    </Suspense>);
}

function ContactForm() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [formData, setFormData] = useState<iContactForm>(EMPTY_FORM);
    const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof iContactForm, string>>>({});
    const contactMutation = useContactForm();

    useEffect(() => {
        const raison = searchParams.get('raison');
        if (raison && RAISONS.includes(raison)) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFormData((prev) => ({...prev, raison}));
            router.replace(pathname);
        }
    }, [searchParams, pathname, router]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
        setFieldErrors((prev) => {
            if (!prev[name as keyof iContactForm]) return prev;
            const next = {...prev};
            delete next[name as keyof iContactForm];
            return next;
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFieldErrors({});
        contactMutation.mutate(formData, {
            onError: (error) => {
                if (error instanceof ApiError && error.status === 400 && error.data) {
                    const errors: Partial<Record<keyof iContactForm, string>> = {};
                    Object.entries(error.data).forEach(([field, messages]) => {
                        errors[field as keyof iContactForm] = Array.isArray(messages) ? messages[0] : String(messages);
                    });
                    setFieldErrors(errors);
                }
            },
        });
    };

    const hasFieldErrors = Object.keys(fieldErrors).length > 0;
    const generalError = contactMutation.isError && !hasFieldErrors
        ? "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer."
        : null;

    return (<div className="nav-offset py-16 space-y-32">
        <div className="container mx-auto px-5 text-center mt-16">
            <h2 className="text-brown mb-4">Réservation &amp; renseignement par téléphone :</h2>
            <a href="tel:+33650118725" className="block text-brown text-5xl md:text-7xl font-bold hover:text-orange transition-colors duration-200">06 50 11 87 25</a>
        </div>

        <div className="container mx-auto px-5">
            <div className="bg-brown px-6 py-12 md:px-16 rounded-3xl">
                <h2 className="text-beige text-center mb-8">Formulaire de contact</h2>
                {contactMutation.isSuccess ? (
                    <p className="text-beige text-center">{contactMutation.data.message}</p>
                ) : (
                    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex flex-col gap-3">
                        <FormField label="Nom" name="nom" required value={formData.nom} onChange={handleChange} error={fieldErrors.nom}/>
                        <FormField label="E-mail" name="email" type="email" required value={formData.email} onChange={handleChange} error={fieldErrors.email}/>
                        <FormField label="Téléphone" name="telephone" type="tel" required value={formData.telephone} onChange={handleChange} error={fieldErrors.telephone}/>
                        <FormField label="Sélectionnez la raison de votre message :" name="raison" type="select" options={RAISONS} required value={formData.raison} onChange={handleChange} error={fieldErrors.raison}/>
                        <FormField label="Votre message :" name="message" type="textarea" required value={formData.message} onChange={handleChange} error={fieldErrors.message}/>
                        {generalError && <p className="text-red font-medium text-center">{generalError}</p>}
                        <div className="mt-4">
                            <SubmitButton disabled={contactMutation.isPending}>
                                {contactMutation.isPending ? 'Envoi en cours...' : 'Envoyer'}
                            </SubmitButton>
                        </div>
                    </form>
                )}
            </div>
            <SmallText className="text-center mt-6">Dans la mesure du possible, merci de privilégier le contact par téléphone.</SmallText>
        </div>
    </div>);
}
