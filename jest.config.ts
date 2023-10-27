// module.exports = {
//     transform: {
//         '^.+\\.(ts|tsx)$': 'ts-jest',
//     },
//     moduleNameMapper : {
//         '^react-dnd$': 'react-dnd/dist/cjs',
//         '^react-dnd-html5-backend$': 'react-dnd-html5-backend/dist/cjs',
//         '^dnd-core$': 'dnd-core/dist/cjs',
// }
// };

// const nextJest = require("next/jest");
// const createJestConfig = nextJest({
//   dir: "./",
// });
// const customJestConfig = {
//   moduleDirectories: ["node_modules", "<rootDir>/"],
//   testEnvironment: "jest-environment-jsdom",
// };
// module.exports = createJestConfig(customJestConfig);


const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

// Jest.config.js
const customConfig = {
  // Automatically clear mock calls and instances between every test
  'clearMocks': true,
  // The directory where Jest should output its coverage files
  'coverageDirectory': '.coverage',
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  'setupFilesAfterEnv': ['./jest.setup.js'],
  // By default jest will use a node environment, so DOM elements (like document) will be undefined without this
  'testEnvironment': 'jest-environment-jsdom',
  'moduleDirectories': ['node_modules', '<rootDir>/'],
}
// const customJestConfig = {
//     moduleDirectories: ['node_modules', '<rootDir>/'],
//     testEnvironment: 'jest-environment-jsdom',
//     setupFilesAfterEnv: ['./setupTests.js']
//   }

module.exports = createJestConfig(customConfig)