const jestConfig = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@hooks(.*)$": "<rootDir>/client/hooks$1",
    "^@server(.*)$": "<rootDir>/server$1",
    "^@models(.*)$": "<rootDir>/server/db/models$1",
    "^@models$": "<rootDir>/server/db/models/index.ts",
    "^@schema$": "<rootDir>/server/graphql/schema/index.ts",
    "^@graphql/server(.*)$": "<rootDir>/server/graphql$1",
    "^@graphql/client(.*)$": "<rootDir>/client/graphql$1",
    "^@gql/queries$": "<rootDir>/client/graphql/queries/index.ts",
  },
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  resetMocks: true,
};

module.exports = jestConfig;
