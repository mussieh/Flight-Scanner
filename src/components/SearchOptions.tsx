import { Search } from "lucide-react";
import DateInput from "./DateInput";
import PassengerInput from "./PassengersInput";
import { Button } from "./ui/button";
import AirportInput from "./AirportInput";
import { useFlightStore } from "@/store/flightStore";
import { useFlights } from "@/hooks/useFlights";
import { ClipLoader } from "react-spinners";
import { formatDateToYYYYMMDD } from "@/lib/utils";

const SearchOptions = () => {
    const { from, to, departureDate, returnDate, passengers, setFlights } =
        useFlightStore();

    const { isFetching, refetch } = useFlights(
        from,
        to,
        formatDateToYYYYMMDD(departureDate!),
        formatDateToYYYYMMDD(returnDate!),
        passengers
    );

    return (
        <div className="max-w-300 w-full h-full bg-white mx-auto rounded-2xl p-6.5">
            <div className="grid items-end grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                <AirportInput id="from" direction="From" />
                <AirportInput id="to" direction="To" />
                <DateInput id="departure" direction="Departure" />
                <DateInput id="return" direction="Return" />
                <PassengerInput />
            </div>
            <div className="flex justify-center w-full mt-8">
                <Button
                    disabled={isFetching}
                    onClick={async () => {
                        const result = await refetch(); // wait for fresh data
                        if (result.data) {
                            setFlights(result.data);
                        }
                    }}
                    className="min-h-13 w-full md:max-w-70 flex gap-5 hover:cursor-pointer"
                >
                    {isFetching ? (
                        <ClipLoader size={20} color="#fff" />
                    ) : (
                        <>
                            <Search />
                            <p>Search Flights</p>
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
};

export default SearchOptions;
