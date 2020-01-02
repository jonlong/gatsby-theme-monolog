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
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js")
        }
      }
    }
  ]
};
