module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  extends: ["eslint:recommended", "plugin:astro/recommended", "prettier"],
  parserOptions: { ecmaVersion: 2022, sourceType: "module" },
  overrides: [
    {
      files: ["**/*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "espree",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
    {
      files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
      rules: {},
    },
  ],
  ignorePatterns: ["dist/", ".astro/", "node_modules/"],
};
