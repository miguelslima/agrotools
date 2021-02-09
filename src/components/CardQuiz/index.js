import React from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Database from '../../database';

import {
  Container,
  TitleContainer,
  TitleQuestion,
  ItemQuestion,
  ContainerFooter,
  IconsContainer,
} from './styles';

const CardQuiz = ({id, item, navigation}) => {
  async function handleEditPress() {
    const item = await Database.getItem(id);
    navigation.navigate('AppInspect', item);
  }

  async function handleAnswerPress() {
    const item = await Database.getItem(id);
    navigation.navigate('AnswerQuiz', item);
  }

  function handleDeletePress() {
    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja excluir este item?',
      [
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            Database.deleteItem(id).then((response) =>
              navigation.navigate('AnswerQuiz', {id: id}),
            );
          },
        },
      ],
      {cancelable: false},
    );
  }

  return (
    <Container>
      <TitleContainer>
        <TitleQuestion>Título questionário:</TitleQuestion>
        <ItemQuestion>{item}</ItemQuestion>
      </TitleContainer>
      <ContainerFooter>
        <TouchableOpacity onPress={handleAnswerPress}>
          <Text>Responder</Text>
        </TouchableOpacity>
        <IconsContainer>
          <TouchableOpacity onPress={handleDeletePress}>
            <Icon name="trash" size={30} color="#ff9900" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEditPress}>
            <Icon name="eye" size={30} color="#ff9900" />
          </TouchableOpacity>
        </IconsContainer>
      </ContainerFooter>
    </Container>
  );
};

export default CardQuiz;
