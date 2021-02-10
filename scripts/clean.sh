#!/bin/sh

# This script will clean out your system of
# everything react-native related to this project
# if something is breaking in the project, run this script first

echo "Running clean.sh"

# Remove React Native Cache
echo "Removing react native cache"
rm -rf $TMPDIR/react-*

# Remove Metro Bundler Cache
echo "Remove metro cache"
rm -rf $TMPDIR/metro-*

# Delete all watchman caches
echo "Remove watchman watches"
watchman watch-del-all

# Remove node modules
echo "Remove node_modules"
rm -rf node_modules

# Clear yarn cache
echo "Clear yarn cache"
yarn cache clean

# Remove iOS /builds folder
echo "Remove ios/builds"
rm -rf ios/builds

# Remove iOS /pods folder
echo "Remove ios/pods"
rm -rf ios/pods

# Remove android build folder
echo "Removing android/build"
rm -rf android/build

# Run gradlew clean
echo "Running gradlew clean"
(cd android && ./gradlew clean)

# Re-install everything
echo "Re-install dependencies"
yarn install
(cd ios && pod install)

echo "Complete"