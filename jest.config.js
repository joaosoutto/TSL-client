/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
};
