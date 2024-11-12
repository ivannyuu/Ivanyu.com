/** @type {import('tailwindcss').Config} */ //tells IDE that the configuration object adheres to the expected structure of a Tailwind CSS configuration file
export default {
  // 'content' tells Tailwind where to look for classes to purge unused CSS.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // 'theme' is where you can extend or customize Tailwind's default settings.
  theme: {
    extend: {},
  },
  // 'plugins' lets you add extra features to Tailwind.
  plugins: [], // Empty for now, but you can add plugins later.
}

