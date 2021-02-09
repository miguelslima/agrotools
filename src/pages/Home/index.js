import React, {useState} from 'react';

import GetLocation from 'react-native-get-location';
import Card from '../../components/Card';
import {useNavigation} from '@react-navigation/native';

import {Container, Title, Subtitle} from './styles';

const Home = () => {
  const navigation = useNavigation();
  // const [latitude, setLatitude] = useState(0);
  // const [longitude, setLongitude] = useState(0);

  // GetLocation.getCurrentPosition({
  //   enableHighAccuracy: true,
  //   timeout: 15000,
  // })
  //   .then((location) => {
  //     console.log(location);
  //     setLatitude(location.latitude);
  //     setLongitude(location.longitude);
  //   })
  //   .catch((error) => {
  //     const {code, message} = error;
  //     console.warn(code, message);
  //   });

  return (
    <Container>
      <Title>Dashboard</Title>

      <Card onPress={() => navigation.navigate('AnswerQuiz')}>
        Responda questionários cadastrados
      </Card>

      <Card onPress={() => navigation.navigate('CreateQuiz')}>
        Crie seu questionário
      </Card>

      <Card onPress={() => navigation.navigate('Quiz')}>
        Visualize respostas de questionários já preenchidos
      </Card>
    </Container>
  );
};

export default Home;
