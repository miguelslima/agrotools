import React, {useState, useEffect} from 'react';
import {Text, ScrollView} from 'react-native';
import CardQuiz from '../../components/CardQuiz';

import Database from '../../database';

import {Container} from './styles';

const AnswerQuiz = ({route, navigation}) => {
  const [items, setItems] = useState([
    {
      id: '1',
      item: 'teste',
      navigation: '',
    },
  ]);

  useEffect(() => {
    Database.getItems().then((items) => setItems(items));
  }, [route]);

  return (
    <Container>
      <Text>Answer Quiz</Text>

      <ScrollView>
        {items.map((item) => {
          return (
            <CardQuiz
              key={item.id}
              id={item.id}
              item={item.titulo}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default AnswerQuiz;
