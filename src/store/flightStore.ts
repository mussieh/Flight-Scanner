import type { Flight } from "@/lib/flights";
import { create } from "zustand";

type FlightState = {
    from: string;
    to: string;
    departureDate: Date | null;
    returnDate: Date | null;
    passengers: number;
    activeInput: string | null; // NEW
    flights: Flight[];
    setField: <
        K extends keyof Omit<
            FlightState,
            "setField" | "reset" | "activeInput" | "setActiveInput"
        >
    >(
        field: K,
        value: FlightState[K]
    ) => void;
    reset: () => void;
    setActiveInput: (id: string | null) => void; // NEW
    setFlights: (flights: Flight[]) => void;
};

export const useFlightStore = create<FlightState>((set) => ({
    from: "",
    to: "",
    departureDate: null,
    returnDate: null,
    passengers: 1,
    activeInput: null,
    flights: [],
    setField: (field, value) =>
        set((state) => ({
            ...state,
            [field]: value,
        })),
    reset: () =>
        set({
            from: "",
            to: "",
            departureDate: null,
            returnDate: null,
            passengers: 1,
            activeInput: null,
            flights: [],
        }),
    setActiveInput: (id) => set({ activeInput: id }),
    setFlights: (flights) => set({ flights }),
}));
