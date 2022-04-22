module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
  transform: {
    "^.+\\.(js|ts)$": "ts-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.js"
  },
};

