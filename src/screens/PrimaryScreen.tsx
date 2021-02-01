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
  navigation: NavigationProp<'PrimaryScreen'>;
};

const PrimaryScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigation.navigate('SecondaryScreen');
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Heading>Primary Screen</Heading>
      <Button onPress={handleNavigate}>Navigate to Second Screen</Button>
      <Button onPress={handleLogout}>Logout</Button>
    </Container>
  );
};

export default PrimaryScreen;
