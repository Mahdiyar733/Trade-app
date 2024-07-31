/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Inter: ["Inter", "sans"],
				Poppins: ["Kanit", "sans-serif"],
			},
			colors: {
				BG: "#0B132B",
				WHITE: "#F4D8CD",
				RED: "#E92B2B",
				ORNG: "#F97A1F",
				GRAY: "#D9D9D9",
				YELLOW: "#EEF226",
				GREEN: "#37FF33",
			},
		},
	},
	plugins: [require("daisyui"), require("tailwindcss-animated")],
};
