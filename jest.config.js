const { name } = require('./package.json')

module.exports = {
  displayName: {
    name,
    color: 'green'
  },
  rootDir: '.',
  roots: ['<rootDir>/tests/'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  }
  // testEnvironment: 'node'
}
