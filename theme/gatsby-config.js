const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-import"),
          tailwindcss(`${__dirname}/tailwind.config.js`),
          require("postcss-nested"),
          require("autoprefixer")
        ]
      }
    }
  ]
};
