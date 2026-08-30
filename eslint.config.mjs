import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Apostrophes and quotes in prose render fine; escaping them hurts
      // readability of the long-form guide copy. Disabled project-wide.
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
