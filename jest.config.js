module.exports = {
  testMatch: ['**/test/**/*.spec.js'],
  coverageReporters: ['json', 'lcov', 'html', 'text'],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/test/'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 70,
      statements: 70
    }
  }
};
