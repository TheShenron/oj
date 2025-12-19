/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,

    env: {
        node: true,
        es2022: true
    },

    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module"
    },

    plugins: ["@typescript-eslint"],

    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],

    ignorePatterns: [
        "dist/",
        "node_modules/",
        "*.js"
    ],

    rules: {
        /* Code Quality */
        "no-console": "off", // backend logging is OK
        "no-process-exit": "off",

        /* TypeScript */
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { "argsIgnorePattern": "^_" }
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/require-await": "error",

        /* Practical backend relaxations */
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/ban-ts-comment": "warn"
    }
};
