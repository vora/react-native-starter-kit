/**
 * This is a sample screen
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { Heading } from '~/components/Heading';
import { login } from '~/store/modules/auth';
import { IS_PROD, MY_VAR } from '@env';
import { View, Text } from 'react-native';

const AuthScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <Container>
      <Heading>Auth Screen</Heading>
      <Button onPress={handleLogin}>Log In</Button>
      <View>
        <Text>Enviorment Variables</Text>
        <Text>IS_PROD: {IS_PROD}</Text>
        <Text>MY_ENV: {MY_VAR}</Text>
      </View>
    </Container>
  );
};

export default AuthScreen;
