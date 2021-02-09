import React, {useState} from 'react';
import {Text, View} from 'react-native';
import GetLocation from 'react-native-get-location';

import {Container, Title} from './styles';

const Home = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then((location) => {
      console.log(location);
      setLatitude(location.latitude);
      setLongitude(location.longitude);
    })
    .catch((error) => {
      const {code, message} = error;
      console.warn(code, message);
    });

  return (
    <Container>
      <Title>Home</Title>
      <Text>Latitude: {latitude} </Text>
      <Text>Longitude: {longitude} </Text>
    </Container>
  );
};

export default Home;
