const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: '"Montserrat", sans-serif', // Adds a new `font-display` class
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["night"],
    },
});
