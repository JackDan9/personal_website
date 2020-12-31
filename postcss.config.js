// eslint-disable-next-line @typescript-eslint/no-var-requires
const puraecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [puraecss] : [])
  ]
};