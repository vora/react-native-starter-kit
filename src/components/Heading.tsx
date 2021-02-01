/**
 * This is a sample component
 */

import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  children: string;
};

export const Heading: React.FC<Props> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
