import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useFlightStore } from "@/store/flightStore";

function formatDate(date: Date | undefined) {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

type DateInputProps = {
    id: string;
    direction: "Departure" | "Return";
};

const DateInput = ({ id, direction }: DateInputProps) => {
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    const { activeInput, setActiveInput, setField } = useFlightStore();

    const isOpen = activeInput === id;

    return (
        <div className="flex flex-col gap-3 w-full lg:max-w-56">
            <Label htmlFor="date" className="px-1 text-gray-700">
                {direction}
            </Label>

            <Popover
                open={isOpen}
                onOpenChange={(open) => setActiveInput(open ? id : null)}
            >
                <PopoverTrigger asChild>
                    <Button
                        variant="secondary"
                        className="w-full min-h-13 justify-start text-left font-normal"
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? formatDate(date) : <span>Select date</span>}
                    </Button>
                </PopoverTrigger>

                <PopoverContent
                    align="start"
                    className="min-w-56 p-0 w-(--radix-popover-trigger-width)"
                >
                    <Calendar
                        mode="single"
                        className="w-full"
                        selected={date}
                        onSelect={(selected) => {
                            setDate(selected);
                            setField(
                                direction === "Departure"
                                    ? "departureDate"
                                    : "returnDate",
                                selected!
                            );
                            setActiveInput(null); // close after selecting date
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default DateInput;
