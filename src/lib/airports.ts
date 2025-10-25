// In server environment, API key will be stored in .env file
// Here we are using it for demo purposes only
const options = {
    method: "GET",
    headers: {
        "x-rapidapi-key": "d5125965a7msh3200f4961826fc2p10a206jsn26da3594d2d6",
        "x-rapidapi-host": "google-flights2.p.rapidapi.com",
    },
};

export type AirportItem = {
    id: string;
    type: string;
    title: string;
};

export type AirportData = {
    status: boolean;
    message: string;
    timestamp: number;
    data: AirportItem[];
};

export const fetchAirports = async (query: string) => {
    const url = `https://google-flights2.p.rapidapi.com/api/v1/searchAirport?query=${query}&language_code=en-US&country_code=US`;
    const response = await fetch(url, options);
    const result: AirportData = await response.json();
    const airports = result?.data?.filter((data) => data?.type === "airport");

    return airports ?? [];
};
