// const nextJest = require('next/jest')

// const createJestConfig = nextJest({ 
//   dir: './'
// })

// const customConfig = { 
//   'clearMocks': true,
//   'coverageDirectory': '.coverage',
//   'moduleDirectories': ['node_modules', '<rootDir>/'],
//   'setupFilesAfterEnv': ['<rootDir>/jest.setup.js'],
//   'testEnvironment': 'jest-environment-jsdom',
//   'preset': 'ts-jest',
//   // 'transform': {
//   //   '^.+\\.(ts|tsx|js)$': 'babel-jest', // this is probably something you already had, if using ts-jest, it's probably fine to leave as ts-jest
//   //   '^.+\\.(css)$': '<rootDir>/config/jest/fileTransform.js', // add this to fix css import issues
//   // },
//   // 'transformIgnorePatterns': ["node_modules/(?!(swiper|ssr-window|dom7)/)"],
// }

// module.exports = createJestConfig(customConfig)

const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest',
    verbose: true,
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)