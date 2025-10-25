import { useFlightStore } from "@/store/flightStore";
import FlightCard from "./FlightCard";

const FlightList = () => {
    const { flights } = useFlightStore();

    return (
        <div className="flex items-center flex-col gap-5 p-10">
            {flights?.map((flight, index) => (
                <FlightCard key={index} flight={flight} />
            ))}
        </div>
    );
};

export default FlightList;
