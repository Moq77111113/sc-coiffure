import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import tailwind from "eslint-plugin-tailwindcss";
import vue from "eslint-plugin-vue";
import globals from "globals";
import ts from "typescript-eslint";

export default ts.config(
  {
    ignores: ["node_modules", "dist", "build", "*.*js"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs["flat/recommended"],
  ...tailwind.configs["flat/recommended"],
  prettier,

  {
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
        project: ["./tsconfig.json", "./inertia/tsconfig.json"],
        extraFileExtensions: [".vue"],
        sourceType: "module",
      },
    },
  },
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/no-contradicting-classname": "off",
      "tailwindcss/no-unnecessary-arbitrary-value": "off",
    },
  },
);
