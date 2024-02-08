// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import { setConfig } from 'next/config'
import config from './next.config'

module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/@next/ApiReq/*',
    '!**/@next/utils/*',
    '!**/@next/hooks/*',
    '!**/@next/store/slices/auth/*',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/pages/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**'
  ],

  / hi geys :DDD
  // moduleDirectories: ['node_modules', '<rootDir>/node_modules', '.'],
  // moduleNameMapper: {
  //   ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  //   /* Handle CSS imports (with CSS modules)

{
  "public": {
    "chainName": "Pylons",
    "chainId": "pylons-testnet-3",
    "gtm": "{Add your Google Tag Manager ID here}",
    "slashingWindow": 10000,
    "uptimeWindow": 250,
    "initialPageSize": 30,
    "secp256k1": false,
    "bech32PrefixAccAddr": "pylo",
    "bech32PrefixAccPub": "pylopub",
    "bech32PrefixValAddr": "pylovaloper",
