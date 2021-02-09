import React, {useState, useEffect} from 'react';
import {Text, ScrollView, View, TouchableOpacity} from 'react-native';
import CardQuiz from '../../components/CardQuiz';

import Database from '../../database';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  NoQuestionnaire,
  NoQuestionnaireText,
  ButtonCreate,
  CreateQuiz,
} from './styles';

const AnswerQuiz = ({route, navigation}) => {
  const [items, setItems] = useState([]);
  const {navigate} = useNavigation();

  useEffect(() => {
    Database.getItems().then((items) => setItems(items));
  }, [route]);

  console.log(items.length);

  return (
    <Container>
      {items.length === 0 ? (
        <NoQuestionnaire>
          <NoQuestionnaireText>
            Sem questionários cadastrados
          </NoQuestionnaireText>
          <ButtonCreate onPress={() => navigate('CreateQuiz')}>
            <CreateQuiz>Crie seu questionário</CreateQuiz>
          </ButtonCreate>
        </NoQuestionnaire>
      ) : (
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
      )}
    </Container>
  );
};

export default AnswerQuiz;
