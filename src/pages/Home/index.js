import React, {useState} from 'react';
import {Text, View} from 'react-native';
import GetLocation from 'react-native-get-location';

// import { Container } from './styles';

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
    <View>
      <Text>Home</Text>
      <Text>Latitude: {latitude} </Text>
      <Text>Longitude: {longitude} </Text>
    </View>
  );
};

export default Home;
