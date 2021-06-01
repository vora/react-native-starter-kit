# React Native Starter Kit

!! PLEASE DO NOT USE THIS TEMPLATE !!

This template is out of date by several react native versions. Until this template is updated to the latest version, please create new projects with `npx react-native init ProjectName` and only use this project for refrence purposes.

## Prerequisites

This project requires NodeJS and Yarn to be installed. If you prefer to use another package manager such as `npm` or `pnpm`, delete `yarn.lock` and run the install command for your preferred package manager.

## Commands

- `yarn ios` - build the iOS app
- `yarn android` - build the Android app
- `yarn start` - start the metro bundler
- `yarn format` - Run prettier
- `yarn lint` - Run eslint
- `yarn ci` - run tsc, prettier and eslint.
- `yarn pods` - Install Cocoapods
- `yarn clean-project` - Run clean script

## Whats Included

- Typescript, ESLint and Prettier
- SVG Support
- Basic Github Workflow Template
- Babel Plugin Module Resolver
- React Navigation
- Redux, Redux Persist + Devtools
- Axios with interceptors setup
- Postinstall Scripts: Suppress Xcode warnings and make "React Native Debugger" the default debugger
- Package script commands for managing cocoapods (`yarn bundle` and `yarn pods`)
- ENV support with `react-native-dotenv`

## Setup for Your Project

1. Install Node Dependencies using `yarn install`

2. Install iOS dependencies using `yarn bundle` then `yarn pods`

3. Update Dependencies: Run `yarn outdated` to and upgrade any outdated packages

4. Rename the app: Use `npx react-native-rename <newName> -b <bundleIdentifier>`

5. Update any enviorment variables in `.env` as well as corresponding types in `typings/env.d.ts`

## Disabling postinstall tasks

By default, during the "postinstall", we do two things:

1. Make the React Native Debugger the default app that opens when toggle debugging
2. Suppress useless Xcode warnings during the build step

To disable this, remove the "postinstall" line from package.json
