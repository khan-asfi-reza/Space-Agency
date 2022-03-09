const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./assets/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./elements/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        screens: {
            'sxs': '345px',
            'xs': '475px',
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                primary: "#1e3cb7",
                secondary: "#8eee9b",
                clrHeading: "#111827",
                clrsSubheading: "",
                clrText: "#464749",
                clrWhite: "#fff",
                clrGray: "#e9e7e7",
                bgDark: "#f4f3f5",
                bgLight: "#f7f7f7",
                darkBlue: "#0E1134",
                gradientBlue: "#0f054c",
                gradientLightBlue: "#5761d7"
            }
        },
    },
    plugins: [],
}