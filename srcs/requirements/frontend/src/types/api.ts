export interface iPartenaire {
    id: number
    name: string
    url: string
    description: string
    image: string
}

export interface iPartenaireCat {
    id: number
    partenaires: iPartenaire[]
    name: string
}

export interface iQuestion {
    id: number
    question: string
    reponse: string
}

export interface iQuestionCat {
    id: number
    questions: iQuestion[]
    name: string
}

export interface iSortie {
    id: number
    images: {
        id: number
        image: string
    }[]
    titre: string
    lieu: string
    duree: string
    temps_marche_approche: number
    age_minimum: number
    prix: number
    disponible_hiver: boolean
    description: string
    status: "disponible" | "temporairement-indisponible" | "prochainement-disponible"
}

export interface iSortieCat {
    id: number
    sorties: iSortie[]
    name: string
    image: string
    slug: string
    description: string
    image_front?: string
    image_bg?: string
}

export interface iPhotos {
    id: number
    image: string
    grotte: string
    departement: string
    date: string
    auteur: string
}

export interface iPresentation {
    id: number
    titre: string
    year: number
    description: string
    image: string
}

export interface iArticleDetail {
    id: number
    title: string
    slug: string
    authors: {
        id: number
        name: string
    }[]
    background_image: string
    content: string
    created_at: string
}

export interface iArticle {
    id: number
    title: string
    slug: string
    extrait: string
    cover_image: string
    created_at: string
}

export interface iPage {
    id: number
    slug: string
    title: string
    content: string
    updated_at: string
    created_at: string
}
