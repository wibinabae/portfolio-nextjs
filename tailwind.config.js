/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // untuk dark mode toggle
    content: [
        "./src/app/**/*.{ts,tsx,js,jsx}",
        "./src/components/**/*.{ts,tsx,js,jsx}"
    ],
    theme: { extend: {} },
    plugins: [],
}