import {useMutation} from "@tanstack/react-query";

export default function useApiMutation<TData, TVariables>(fn: (variables: TVariables) => Promise<TData>) {
    return useMutation({
        mutationFn: fn,
    });
}
