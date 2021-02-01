/**
 * This is a sample component
 */

import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

type Props = {
  children: ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView>
      <View style={styles.innerContainer}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    paddingVertical: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
