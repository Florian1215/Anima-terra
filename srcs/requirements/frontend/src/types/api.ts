export interface iPartenaire {
    id: number
    name: string
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
    images: string[]
    titre: string
    lieu: string
    duree: string
    temps_marche_approche: number
    age_minimum: number
    prix: number
    disponible_hiver: boolean
    description: string
}

export interface iSortieCat {
    id: number
    sorties: iSortie[]
    name: string
    image: string
    slug: string
    description: string
}

export interface iPhotos {
    id: number
    image: string
    grotte: string
    departement: string
    date: string
    auteur: string
}
