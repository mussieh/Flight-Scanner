import type { Flight } from "@/lib/flights";
import { parseFlightDate } from "@/lib/utils";
import { PlaneTakeoff } from "lucide-react";

type FlightCardProps = {
    flight: Flight;
};

const FlightCard = ({ flight }: FlightCardProps) => {
    const departureObj = parseFlightDate(flight.departure_time);
    const departureTime = departureObj.militaryTime;
    const departureDate = departureObj.formattedDate;

    const arrivalObj = parseFlightDate(flight.arrival_time);
    const arrivalTime = arrivalObj.militaryTime;
    const arrivalDate = arrivalObj.formattedDate;
    const stops = flight.flights.length;

    const stopText = stops > 1 ? `${stops} stops` : "Nonstop";

    return (
        <div className="bg-white rounded-lg max-w-162.5 w-full min-h-37.5 p-6.75 border border-[#E5E5E5] flex flex-wrap items-center justify-center gap-15">
            <div className="flex items-center gap-4.5">
                <div className="bg-[#F9FAFB] p-2 rounded-md">
                    <img
                        className="w-8 h-8"
                        src={flight.airline_logo}
                        alt={"Airline Logo"}
                    />
                </div>
                <div>
                    <p>{flight.flights[0].airline}</p>
                    <p className="text-[#697282]">
                        {flight.flights[0].flight_number}
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3.25">
                <div>
                    <h2 className="text-[#101828] text-2xl">{departureTime}</h2>
                    <p>{flight?.flights[0]?.departure_airport.airport_code}</p>
                    <p className="text-[#697282] text-sm">{departureDate}</p>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-sm text-[#697282]">
                        {flight.duration.text}
                    </p>
                    <div className="flex justify-center">
                        <PlaneTakeoff className="text-[#697282]" size={18} />
                    </div>
                    <p
                        className={`${
                            stopText === "Nonstop"
                                ? "text-green-500"
                                : "text-[#697282]"
                        } text-center text-sm`}
                    >
                        {stopText}
                    </p>
                </div>
                <div>
                    <h2 className="text-[#101828] text-2xl">{arrivalTime}</h2>
                    <p>{flight?.flights[0]?.arrival_airport.airport_code}</p>
                    <p className="text-[#697282] text-sm">{arrivalDate}</p>
                </div>
            </div>
            <div>
                <h2 className="text-[#101828] text-2xl">${flight.price}</h2>
                <p>per person</p>
            </div>
        </div>
    );
};

export default FlightCard;
