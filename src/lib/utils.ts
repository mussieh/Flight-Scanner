import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatDateToYYYYMMDD = (date: Date) => {
    const year = date?.getFullYear();
    const month = String(date?.getMonth() + 1).padStart(2, "0"); // months are 0-indexed
    const day = String(date?.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

export const parseFlightDate = (dateString: string) => {
    // Split into two parts: date and time
    const [datePart, timePart] = dateString.split(" ");
    const [day, month, year] = datePart.split("-");
    const [time, meridian] = [timePart, dateString.split(" ")[2]]; // e.g. "01:29", "PM"

    // Create Date object
    const date = new Date(`${year}-${month}-${day} ${time} ${meridian}`);

    // Format date like "Oct 31"
    const formattedDate = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    });

    // Convert time to 24-hour format
    const [hour12, minute] = time.split(":");
    let hour24 = parseInt(hour12, 10);

    if (meridian === "PM" && hour24 < 12) hour24 += 12;
    if (meridian === "AM" && hour24 === 12) hour24 = 0;

    const militaryTime = `${hour24.toString().padStart(2, "0")}:${minute}`;

    return { formattedDate, militaryTime };
};
