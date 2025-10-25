import { fetchAirports, type AirportItem } from "@/lib/airports";
import { useQuery } from "@tanstack/react-query";

export function useAirports(query: string) {
    return useQuery<AirportItem[], Error>({
        queryKey: ["airports", query],
        queryFn: () => fetchAirports(query),
        enabled: query?.length > 0,
        staleTime: Infinity,
        gcTime: 1000 * 60 * 10,
        retry: 3,
        refetchOnWindowFocus: false,
    });
}
