module.exports = {
  preset: "ts-jest/presets/js-with-babel",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/front/$1",
  },
};
