/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'black': '#000000',
            'pink-light': '#FD79A8',
            'pink-dark': '#E84393',
            'pink-glamour': '#FF7675',
            'orange': '#E17055',
            'yellow': '#FDCB6E',
            'black-light': '#2D3436',
            'black-dark': '#252525',
            'gray-light': '#DFE6E9',
            'gray-dark': '#B2BEC3',
            'cream': '#FFE3C2',
            'cream-dark': '#a07f59',
            'blue': '#074cad',
            'blue-dark': '#06377a',
        }
    },
    plugins: [],
}