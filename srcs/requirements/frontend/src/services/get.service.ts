import useApiQuery from "@/hooks/useApiQuery";
import apiClient from "@/services/apiClient";
import {iArticle, iArticleDetail, iPage, iPartenaireCat, iPhotos, iPresentation, iQuestionCat, iSortieCat} from "@/types/api";


export function useSorties() {
    return useApiQuery(
        ["sorties"],
        () => apiClient<iSortieCat[]>("sorties/"),
    );
}


export function useQuestions() {
    return useApiQuery(
        ["questions"],
        () => apiClient<iQuestionCat[]>("questions/"),
    );
}


export function usePartenaires() {
    return useApiQuery(
        ["partenaires"],
        () => apiClient<iPartenaireCat[]>("partenaires/"),
    );
}


export function usePhotos() {
    return useApiQuery(
        ["photos"],
        () => apiClient<iPhotos[]>("photos/"),
    );
}


export function usePresentation() {
    return useApiQuery(
        ["presentation"],
        () => apiClient<iPresentation[]>("presentation/"),
    );
}

export function useArticles() {
    return useApiQuery(
        ["articles"],
        () => apiClient<iArticle[]>("articles/"),
    );
}


export function useArticle(slug: string) {
    return useApiQuery(
        ["articles", slug],
        () => apiClient<iArticleDetail>(`articles/${slug}/`),
        !!slug,
    );
}

export function usePage(slug: string) {
    return useApiQuery(
        ["pages", slug],
        () => apiClient<iPage>(`pages/${slug}/`),
        !!slug,
    );
}
