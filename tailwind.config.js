/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/_includes/**/*.{html,njk}", // Scan .njk and potentially .html files in _includes and subdirs
    "./src/content/**/*.{html,njk,md}", // Scan .njk, .md, and potentially .html in content and subdirs (like blog)
    "./src/_config/**/*.js",          // Scan .js files in _config (for filters.js)
    "./src/_data/**/*.js",            // Scan .js files in _data (for schema, metadata helpers)
    "./src/content/**/*.11tydata.js", // Specifically scan Eleventy data files in content/*
    // Add any other paths OUTSIDE of src if needed, but avoid overly broad patterns like "./**/*"
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        slate: {
          css: {
            "--tw-prose-headings": theme("colors.slate.800"),
            "--tw-prose-lead": theme("colors.slate.800"),
            "--tw-prose-bold": theme("colors.slate.800"),
            "--tw-prose-links": theme("colors.slate.800"),
            a: {
              fontWeight: "normal",
              textDecoration: "underline",
              textDecorationThickness: "1px",
              textUnderlineOffset: "4px",
              textDecorationColor: theme("colors.slate.800"),
              "&:hover": {
                textDecorationColor: theme("colors.slate.400"),
              },
            },
          },
        },
      }),
    },
  },
  // Consider using ESM import if your setup requires it, otherwise leave as require
  plugins: [require("@tailwindcss/typography")],
};