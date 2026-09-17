import pluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";
import tsParser from "@typescript-eslint/parser";

export default [
  // Astro recommended rules (flat config)
  ...pluginAstro.configs["flat/recommended"],
  // Disable rules that conflict with Prettier
  eslintConfigPrettier,
  // Enable TS in Astro frontmatter
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        project: false,
        extraFileExtensions: [".astro"],
        // Use TypeScript parser for <script> in Astro frontmatter
        parser: tsParser,
      },
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": ["warn", { varsIgnorePattern: "^_" }],
    },
  },
  // JS files
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {},
  },
  // Ignore build artifacts
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },
];
