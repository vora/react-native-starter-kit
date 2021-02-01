/**
 * This is a sample component
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { Heading } from '~/components/Heading';
import { NavigationProp } from '~/Navigator';
import { logout } from '~/store/modules/auth';

type Props = {
  navigation: NavigationProp<'SecondaryScreen'>;
};

const SecondaryScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigation.goBack();
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Heading>Secondary Screen</Heading>
      <Button onPress={handleNavigate}>Go Back to Primary Screen</Button>
      <Button onPress={handleLogout}>Logout</Button>
    </Container>
  );
};

export default SecondaryScreen;
