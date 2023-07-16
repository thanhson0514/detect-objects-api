const { defaults: tsjPreset } = require("ts-jest/presets");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  testEnvironment: "node",
  transform: {
    ...tsjPreset.transform,
    "^.+\\.tsx?$": "ts-jest",
  },
};
