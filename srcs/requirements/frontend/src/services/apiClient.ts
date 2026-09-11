// import {refreshAccessToken} from "@/services/auth.service";

type ApiOptions = RequestInit & {body?: unknown};
export const API_URL = "http://localhost:8459/api/";

export default async function apiClient<T>(endpoint: string, options?: ApiOptions, token?: string): Promise<T> {
    const response = await fetch(
        `${API_URL}${endpoint}`,
        {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(token && {
                    Authorization: `Bearer ${token}`,
                }),
            },
            body: options?.body,
            signal: options?.signal,
        }
    );

    const data = await response.json().catch(() => null);
    if (!response.ok) {
        if (data?.code === "token_not_valid" && endpoint !== 'auth/refresh/') {
            try {
                // await refreshAccessToken(locale);
            } catch {
                throw new ApiError(response.status, data);
            }
            return apiClient<T>(endpoint, options);
        }
        throw new ApiError(response.status, data);
    } else
        return data;
}

export class ApiError extends Error {
    status: number;
    data?: Record<string, string[] | string>;

    constructor(status: number, data?: Record<string, string[] | string>) {
        let unknownErrorMessage = "Unknown error";
        if (status === 401)
            unknownErrorMessage = "Unauthorized";
        else if (status === 403)
            unknownErrorMessage = "Forbidden";
        else if (status === 404)
            unknownErrorMessage = "Not found";
        super(`[${status}] ${data?.detail || data?.message || unknownErrorMessage}`);

        this.name = "ApiError";
        this.status = status;
        this.data = data;
    }
}
