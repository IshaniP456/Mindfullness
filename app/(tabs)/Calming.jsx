import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AudioPage from './AudioPage'; // Adjust the import path as necessary

const Calming = () => {
  const navigation = useNavigation();
  return <AudioPage type="calming" />;
};

export default Calming;
