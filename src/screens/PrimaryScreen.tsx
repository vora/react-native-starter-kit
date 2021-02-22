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
import ArrowCircleUp from '~/components/icons/ArrowCircleUp';
import ArrowCircleRight from '~/components/icons/ArrowCircleRight';
import { View } from 'react-native';

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
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ width: 45, height: 45 }}>
          <ArrowCircleUp />
        </View>
        <View style={{ width: 45, height: 45 }}>
          <ArrowCircleRight />
        </View>
      </View>
    </Container>
  );
};

export default PrimaryScreen;
