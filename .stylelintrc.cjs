module.exports = {
  extends: ["stylelint-config-html"],
  overrides: [
    {
      files: ["**/*.astro"],
      customSyntax: "postcss-html",
    },
  ],
  ignoreFiles: ["dist/**", ".astro/**", "node_modules/**", "public/**"],
  rules: {
    // Allow BEM selectors: block, block__element, block__element--modifier
    "selector-class-pattern":
      /^[a-z][a-z0-9-]*(?:__[a-z0-9-]+)*(?:--[a-z0-9-]+)*$/,
  },
};
