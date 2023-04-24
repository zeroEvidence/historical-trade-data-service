/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  "verbose": true,
  "preset": "ts-jest",
  "testEnvironment": "node",
  "testRegex": "(\\.(test|spec))\\.ts$",
  "testPathIgnorePatterns": [
    "/node_modules/"
  ],
  "globals": {
    "ts-jest": {
      "diagnostics": false
    }
  }
};