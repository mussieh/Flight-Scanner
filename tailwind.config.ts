import type { Config } from "tailwindcss";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                headerGradientTop: "#2C67E6",
                headerGradientBottom: "#4A48CD",
                selectButtonColor: "#030213",
                flightPageBackground: "#FBFCFD",
            },
        },
    },
    plugins: [],
} satisfies Config;
