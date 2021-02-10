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
  AnswerText,
  IconsContainer,
} from './styles';

const CardQuiz = ({id, item, navigation}) => {
  async function handleEditPress() {
    const item = await Database.getItem(id);
    navigation.navigate('ViewQuiz', item);
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
              navigation.navigate('Quiz', {id: id}),
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
        <ItemQuestion numberOfLines={1} ellipsizeMode="tail">
          {item}
        </ItemQuestion>
      </TitleContainer>
      <ContainerFooter>
        <TouchableOpacity onPress={handleAnswerPress}>
          <AnswerText>Responder</AnswerText>
        </TouchableOpacity>
        <IconsContainer>
          <TouchableOpacity onPress={handleDeletePress}>
            <Icon name="trash" size={30} color="#550073" />
          </TouchableOpacity>
          <Text>{'      '}</Text>
          <TouchableOpacity onPress={handleEditPress}>
            <Icon name="eye" size={30} color="#550073" />
          </TouchableOpacity>
        </IconsContainer>
      </ContainerFooter>
    </Container>
  );
};

export default CardQuiz;
