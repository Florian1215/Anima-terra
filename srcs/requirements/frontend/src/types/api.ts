export interface iPartenaire {
    id: number
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
    answer: string
}

export interface iQuestionCat {
    id: number
    questions: iQuestion[]
    name: string
}

export interface iSmallSortie {
    id: number
    image: string
    title: string
    place: string
    duration: string
    minimum_age: number
    price: number
}

export interface iSortie {
    id: number
    title: string
    description: string
    place: string
    duration: string
    minimum_age: number
    price: number
    available_winter: boolean
    status: "disponible" | "temporairement-indisponible" | "prochainement-disponible"
    images: {
        id: number
        image: string
    }[]

    subtitle: string

    image_walking_approach: string
    walking_time_approach: number
    distance: number
    elevation_gain: number
    elevation_profile: [number, number][]

    icons: {
        title: string
        icon: string
        description: string
    }[]

    for_who: string[]

    related: {
        title: string
        recommended: iSmallSortie
    }[]
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
    cave: string
    departement: string
    date: string
    author: string
}

export interface iPresentation {
    id: number
    title: string
    year: number
    description: string
    image: string
}

interface iPerson {
    id: number
    name: string
}

export interface iArticleDetail {
    id: number
    title: string
    slug: string
    authors: iPerson[]
    participants: iPerson[]
    image: string
    content: string
    created_at: string
}

export interface iArticle {
    id: number
    title: string
    slug: string
    excerpt: string
    image: string
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
