/* eslint-disable @typescript-eslint/no-var-requires */
const nextra = require("nextra");

/**
 * @type {import("nextra").NextraConfig}
 */
const config = {
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
};

const withNextra = nextra(config);

module.exports = withNextra({
  compiler: {
    styledComponents: true,
  },
});
