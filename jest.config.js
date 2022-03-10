const jestConfig = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@hooks(.*)$": "<rootDir>/hooks$1",
    "^@server(.*)$": "<rootDir>/server$1",
    "^@graphql-server(.*)$": "<rootDir>/server/graphql$1",
    "^@graphql-client(.*)$": "<rootDir>/graphql$1",
  },
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  resetMocks: true,
};

module.exports = jestConfig;
