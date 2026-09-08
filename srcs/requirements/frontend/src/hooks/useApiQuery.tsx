import {useQuery} from "@tanstack/react-query";

export default function useApiQuery<T>(queryKey: unknown[], fn: () => Promise<T>, enabled = true) {
    return useQuery({
        queryKey: queryKey,
        queryFn: fn,
        enabled: enabled,
        retry: false
    });
}
