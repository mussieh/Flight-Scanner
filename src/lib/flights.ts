// In server environment, API key will be stored in .env file
// Here we are using it for demo purposes only

export type FlightResponse = {
    status: boolean;
    message: string;
    timestamp: number;
    data: {
        itineraries: {
            topFlights: Flight[];
            otherFlights: Flight[];
        };
        priceHistory: {
            summary: {
                current: number;
                low: { operation: string; value: number }[];
                typical: { operation: string; value: number | null }[];
                high: { operation: string; value: number }[];
            };
            history: {
                time: number;
                value: number;
            }[];
        };
    };
};

export type Flight = {
    departure_time: string;
    arrival_time: string;
    duration: {
        raw: number;
        text: string;
    };
    flights: FlightSegment[];
    delay: {
        values: boolean;
        text: number;
    };
    self_transfer: boolean;
    layovers: Layover[] | null;
    bags: {
        carry_on: number;
        checked: number;
    };
    carbon_emissions: {
        difference_percent: number;
        CO2e: number;
        typical_for_this_route: number;
        higher: number;
    };
    price: number;
    stops: number;
    airline_logo: string;
    next_token: string;
};

export type FlightSegment = {
    departure_airport: {
        airport_name: string;
        airport_code: string;
        time: string;
    };
    arrival_airport: {
        airport_name: string;
        airport_code: string;
        time: string;
    };
    duration: {
        raw: number;
        text: string;
    };
    airline: string;
    airline_logo: string;
    flight_number: string;
    aircraft: string;
    seat: string;
    legroom: string;
    extensions: string[];
};

export type Layover = {
    airport_code: string;
    airport_name: string;
    duration_label: string;
    duration: number;
    city: string;
};

export const options = {
    method: "GET",
    headers: {
        "x-rapidapi-key": "d5125965a7msh3200f4961826fc2p10a206jsn26da3594d2d6",
        "x-rapidapi-host": "google-flights2.p.rapidapi.com",
    },
};

export const fetchFlights = async (
    departureAirportCode: string,
    destinationAirportCode: string,
    departureDate: string,
    returnDate: string,
    passengers: number
) => {
    const url = `https://google-flights2.p.rapidapi.com/api/v1/searchFlights?departure_id=${departureAirportCode}&arrival_id=${destinationAirportCode}&outbound_date=${departureDate}&return_date=${returnDate}&adults=${passengers}&show_hidden=1&currency=USD&language_code=en-US&search_type=best`;
    const response = await fetch(url, options);
    const result: FlightResponse = await response.json();

    return result?.data?.itineraries?.topFlights;
};
