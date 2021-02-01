/**
 * This is a sample screen
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { Heading } from '~/components/Heading';
import { login } from '~/store/modules/auth';

const AuthScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <Container>
      <Heading>Auth Screen</Heading>
      <Button onPress={handleLogin}>Log In</Button>
    </Container>
  );
};

export default AuthScreen;
