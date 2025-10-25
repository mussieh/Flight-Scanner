import { MapPin } from "lucide-react";
import { Input } from "./ui/input";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "./ui/command";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import { useAirports } from "@/hooks/useAirports";
import { GridLoader } from "react-spinners";
import { useFlightStore } from "@/store/flightStore";

type AirportInputProps = {
    id: string;
    direction: "From" | "To";
};

const AirportInput = ({ id, direction }: AirportInputProps) => {
    const [airportName, setAirportName] = useState("");
    const [inputOpen, setInputOpen] = useState(true);
    const [debouncedAirportName] = useDebounce(airportName, 500);
    const ref = useRef<HTMLDivElement>(null);

    const { activeInput, setActiveInput, setField } = useFlightStore();

    const { data: airports, isFetching } = useAirports(debouncedAirportName);

    const isActive = activeInput === id;
    const inputPlaceholder =
        direction === "From" ? "Departure Airport" : "Destination Airport";

    // ✅ Close dropdown only when clicking outside
    useEffect(() => {
        if (!isActive) return; // only listen when this input is active

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (ref.current && !ref.current.contains(target)) {
                setTimeout(() => {
                    setInputOpen(false);
                    setActiveInput(null);
                }, 50);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isActive, setActiveInput]);

    return (
        <div ref={ref} className="space-y-2 w-full lg:max-w-50">
            <p className="text-gray-700">{direction}</p>
            <div className="relative" onClick={() => setActiveInput(id)}>
                <div className="flex items-center rounded-lg bg-[#F3F3F5] px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-shadow duration-500">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <Input
                        type="text"
                        placeholder={inputPlaceholder}
                        value={airportName}
                        onChange={(event) => {
                            setAirportName(event.target.value);
                            setInputOpen(true);
                        }}
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-[#F3F3F5] shadow-none placeholder:text-gray-500 text-[#171717]"
                    />
                </div>

                {isActive && inputOpen && (
                    <Command className="absolute h-fit mt-2 w-full rounded-xl border bg-white shadow-md z-10">
                        <CommandList>
                            {isFetching ? (
                                <div className="flex justify-center p-4">
                                    <GridLoader size={4} color="#3B82F6" />
                                </div>
                            ) : (
                                <>
                                    {(airports ?? []).length === 0 &&
                                        airportName && (
                                            <CommandEmpty>
                                                No airports found
                                            </CommandEmpty>
                                        )}
                                    {(airports ?? []).length > 0 &&
                                        airportName && (
                                            <CommandGroup heading="Airports">
                                                {airports?.map((airport) => (
                                                    <CommandItem
                                                        key={airport.id}
                                                        // 👇 stop propagation so the outside click handler doesn’t fire first
                                                        onMouseDown={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                        onSelect={() => {
                                                            setAirportName(
                                                                airport.title
                                                            );
                                                            setField(
                                                                direction ===
                                                                    "From"
                                                                    ? "from"
                                                                    : "to",
                                                                airport.id
                                                            );
                                                            setInputOpen(false);
                                                            setActiveInput(
                                                                null
                                                            );
                                                        }}
                                                    >
                                                        <div className="flex justify-between items-center w-full">
                                                            <p
                                                                title={
                                                                    airport.title
                                                                }
                                                                className="text-[#697282] truncate"
                                                            >
                                                                {airport.title}
                                                            </p>
                                                            <p className="text-gray-700 font-medium">
                                                                {airport.id}
                                                            </p>
                                                        </div>
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        )}
                                </>
                            )}
                        </CommandList>
                    </Command>
                )}
            </div>
        </div>
    );
};

export default AirportInput;
