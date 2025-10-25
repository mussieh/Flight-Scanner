import * as React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Users } from "lucide-react";
import { useFlightStore } from "@/store/flightStore";

const PassengerInput = () => {
    const [passengers, setPassengers] = React.useState("1");
    const { setField } = useFlightStore();

    return (
        <div className="flex flex-col gap-3 w-full lg:max-w-50">
            <label
                htmlFor="passengers"
                className="px-1 text-sm font-medium text-gray-700"
            >
                Passengers
            </label>

            <div className="relative">
                <Select
                    value={passengers}
                    onValueChange={(val) => {
                        setPassengers(val);
                        setField("passengers", Number(val));
                    }}
                >
                    <SelectTrigger
                        id="passengers"
                        className="w-full text-black bg-[#F3F3F5] pl-10 pr-3 py-2 text-left shadow-sm border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none min-h-12 transition-shadow duration-500"
                    >
                        <SelectValue placeholder="Select passengers" />
                    </SelectTrigger>

                    {/* passenger icon */}
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />

                    <SelectContent className="rounded-xl shadow-md">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "Passenger" : "Passengers"}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default PassengerInput;
