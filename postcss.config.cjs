module.exports = {
  plugins: {
    // Explicitly tell Tailwind where to find the config file
    tailwindcss: { config: './tailwind.config.cjs' },
    autoprefixer: {},
  },
}