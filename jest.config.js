module.exports = {
  resetMocks: true,
  resetModules: true,
  verbose: true,
  browser: true,
  collectCoverage: true,
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: [
    "jest-styled-components"
  ],
  coverageReporters: [
    'html',
    'lcov'
  ],
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'clover'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  globals: {
    'ts-jest': {
      extends: './babel.config.js',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  notify: true,
  notifyMode: 'always',
  roots: ['<rootDir>/packages'],
  testMatch: [
    '<rootDir>/packages/*/tests/**/*.test.(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest/testSetup.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
