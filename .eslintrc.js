const path = require("path");

module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    // 上から順番に適用され、どんどん上書きされるため優先度の高いものは一番下に指定する
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-var-requires": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-no-undef": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": [
      "error",
      {
        htmlWhitespaceSensitivity: "ignore",
        singleQuote: false,
      },
    ],
  },
  // import時にエイリアスでエラーを出力しないように設定
  settings: {
    "import/resolver": {
      webpack: {
        config: path.join(__dirname, "./webpack.config.js"),
      },
    },
  },
};
