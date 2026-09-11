import useApiMutation from "@/hooks/useApiMutation";
import apiClient from "@/services/apiClient";

export interface iContactForm {
    nom: string
    email: string
    telephone: string
    raison: string
    message: string
}

export interface iContactResponse {
    message: string
}

export function useContactForm() {
    return useApiMutation((data: iContactForm) =>
        apiClient<iContactResponse>("contact/", {method: "POST", body: JSON.stringify(data)})
    );
}
