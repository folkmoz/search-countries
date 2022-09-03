/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: "568px",
            md: "768px",
            lg: "1240px",
            // desktop: { max: "1440px" },
        },
        extend: {
            gridAutoColumns: {
                "4fr": "minmax(0, 4fr)",
            },
            gridAutoRows: {
                "4fr": "minmax(0, 4fr)",
            },
            boxShadow: {
                tools: "0 0 10px rgb(0 0 0 / 10%)",
                button: "0 0 5px 3px rgb(0 0 0 / 10%)",
            },
            fontSize: {
                items: 14,
                detail: 16,
            },
            colors: {
                "dark-blue": "hsl(209, 23%, 22%)",
                "dark-blue-background": "hsl(207, 26%, 17%)",
                "dark-blue-text": "hsl(200, 15%, 8%)",
                "dark-gray": "hsl(0, 0%, 52%)",
                "light-gray": "hsl(0, 0%, 98%)",
            },
        },
    },
    plugins: [],
};
