import type { Config } from 'jest';
import presets from 'jest-preset-angular/presets';

module.exports = {
  preset: 'jest-preset-angular',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  ...presets.createCjsPreset(),
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
} satisfies Config;
