module.exports = {
    "verbose": true,
    "roots": [
      "<rootDir>/src"
    ],
    "transform": {
      "^.+\\.[t|j]s?$": "babel-jest"
    },
    "testRegex": '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)$',
    "moduleFileExtensions": [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    "setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"],
}