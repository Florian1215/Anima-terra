import useApiQuery from "@/hooks/useApiQuery";
import apiClient from "@/services/apiClient";
import {iPartenaireCat, iQuestionCat, iSortieCat} from "@/types/api";


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
