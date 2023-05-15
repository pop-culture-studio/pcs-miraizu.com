import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './resources/js/components/**/*',
        './resources/views/**/*'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"M PLUS Rounded 1c"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                gray: {
                    DEFAULT: '#595757'
                },
                yellow: {
                    DEFAULT: '#f9bc00'
                },
                lime: {
                    DEFAULT: '#7bbd39'
                },
                sky: {
                    DEFAULT: '#00b7eb'
                },
                red: {
                    DEFAULT: '#ec7058'
                },
                pink: {
                    DEFAULT: '#eb6d7c'
                },
                orange: {
                    DEFAULT: '#f1932c'
                },
                blue: {
                    DEFAULT: '#036eb7'
                },
                green: {
                    DEFAULT: '#13ae67'
                },
                rose: {
                    DEFAULT: '#e7273e'
                },
                note: {
                    DEFAULT: '#41C9B4'
                }
            }
        },
    },

    plugins: [typography],
};
