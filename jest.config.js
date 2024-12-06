module.exports = {
  preset: 'react-native',
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  collectCoverageFrom: ['src/utils/**/*.{js,jsx,ts,tsx}'],
  //setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
