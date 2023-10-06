const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["unused-imports", "testing-library"],
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  rules: {
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "generic",
        readonly: "generic",
      },
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        ignoreRestArgs: true,
      },
    ],
    curly: "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["swr"],
            importNames: ["useSWR"],
            message: 'Please use "getPost" instead of "useSWR" directly',
          },
        ],
      },
    ],
    "no-unused-vars": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: ["block-like", "function", "multiline-const", "return"],
      },
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "react/jsx-curly-brace-presence": [
      "warn",
      {
        props: "never",
        children: "never",
        propElementValues: "always",
      },
    ],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "react-hooks/exhaustive-deps": "error",
    "unused-imports/no-unused-imports": "off",
    "unused-imports/no-unused-vars": "off",
  },
};
