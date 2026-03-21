/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/**/*.html",
        "./public/js/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                'display': ['Clash-Display', 'sans-serif'],
                'display-bold': ['Clash-Display-Bold', 'sans-serif'],
            },
            colors: {
                'glass-bg': 'rgba(255, 255, 255, 0.03)',
                'glass-border': 'rgba(255, 255, 255, 0.08)',
                'accent-purple': '#8b5cf6',
                'accent-pink': '#ec4899',
            },
            backgroundImage: {
                'gradient-dark': 'linear-gradient(135deg, #0f111a 0%, #161224 100%)',
                'gradient-accent': 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            }
        },
    },
    plugins: [],
}
