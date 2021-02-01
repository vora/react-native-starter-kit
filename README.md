# React Native Starter Kit

## Pre-requsites

This project requires NodeJS and Yarn to be installed. If you prefer to use another package manager such as `npm` or `pnpm`, delete `yarn.lock` and run the install command for your preferred package manager.

## Commands

- `yarn ios` - build the iOS app
- `yarn android` - build the Android app
- `yarn start` - start the metro bundler
- `yarn format` - Run prettier
- `yarn lint` - Run eslint
- `yarn ci` - run tsc, prettier and eslint.
- `yarn pods` - Install Cocoapods

## Whats Included

- Typescript, ESLint and Prettier

- Babel Plugin Module Resolver: Allows you to import module like `import Component from '~/components/common/Component'`

- React Navigation: Setup with a stack navigator. Configure in `src/Navigator.tsx`

- Redux, Redux Persist and Redux Devtools: Configure in `src/store/store.ts`

- Axios with Request Interceptors: Configure in `src/requests/helpers/setup.ts`

- Inhibit Warnings: Suppress useless Xcode warnings when running `yarn ios`

- React Native Deugger Open: Automatically open the React Native Debugger instead of Chrome.

## Setup for Your Project

1. Clone and Setup: run `yarn install` then `yarn pods`

2. Update Dependencies: Run `yarn outdated` to and upgrade any outdated packages

3. Rename the app: Use `npx react-native-rename <newName> -b <bundleIdentifier>`
