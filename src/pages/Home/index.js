import React from 'react';

import Card from '../../components/Card';
import {useNavigation} from '@react-navigation/native';

import {Container, Title} from './styles';

const Home = () => {
  const navigation = useNavigation();

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
