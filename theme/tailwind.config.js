const customColorNames = [
  "alpha",
  "beta",
  "gamma",
  "delta",
  "epsilon",
  "zeta",
  "eta",
  "theta",
  "iota",
  "kappa"
];

module.exports = {
  theme: {
    extend: {
      colors: () =>
        customColorNames.reduce((allNames, name) => {
          allNames[name] = `var(--color-${name})`;
          return allNames;
        }, {}),

      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" }
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = customColorNames.reduce((allNames, name) => {
        allNames[`.text-shadow-${name}`] = {
          "text-shadow": `var(--shadow-${name})`
        };

        return allNames;
      }, {});

      addUtilities(newUtilities);
    }
  ]
};
