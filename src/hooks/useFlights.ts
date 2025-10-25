import { fetchFlights, type Flight } from "@/lib/flights";
import { useQuery } from "@tanstack/react-query";

export function useFlights(
    departureAirportCode: string,
    destinationAirportCode: string,
    departureDate: string,
    returnDate: string,
    passengers: number
) {
    return useQuery<Flight[], Error>({
        queryKey: [
            "flights",
            departureAirportCode,
            destinationAirportCode,
            departureDate,
            returnDate,
            passengers,
        ],
        queryFn: () =>
            fetchFlights(
                departureAirportCode,
                destinationAirportCode,
                departureDate,
                returnDate,
                passengers
            ),
        enabled: false,
        retry: 3,
    });
}
