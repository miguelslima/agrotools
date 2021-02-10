import React, {useState, useEffect, useMemo} from 'react';
import {Text, ScrollView, View} from 'react-native';
import GetLocation from 'react-native-get-location';
import Icon from 'react-native-vector-icons/Feather';

import Database from '../../database';

import {
  Container,
  Title,
  Subtitle,
  SubtitleCenter,
  TextInput,
  QuestionText,
  LocationContainer,
  LocationText,
  AnswerButton,
  AnswerButtonText,
} from './styles';

const AnswerQuiz = ({route, navigation}) => {
  const id = route.params ? route.params.id : undefined;
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [descricao, setDescricao] = useState(null);
  const [titulo, setTitulo] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [date, setDate] = useState(null);
  const [dateNow, setDateNow] = useState(new Date());
  const [dateQuest, setDateQuest] = useState(null);

  function handleTitleChange(titulo) {
    setTitulo(titulo);
  }
  function handleUserChange(usuario) {
    setUsuario(usuario);
  }
  function handleDescriptionChange(descricao) {
    setDescricao(descricao);
  }
  function handleDateChange(date) {
    setData(date);
  }
  function handleDateQuestChange(dateQuest) {
    setDateQuest(dateQuest);
  }
  function handleLatChange(latitude) {
    setLatitude(latitude);
  }
  function handleLongChange(longitude) {
    setLongitude(longitude);
  }

  useEffect(() => {
    if (!route.params) return;
    setTitulo(route.params.titulo);
    setUsuario(route.params.usuario);
    setDescricao(route.params.descricao);
    setDate(route.params.date);
    setDateQuest(route.params.dateQuest);
    setLatitude(route.params.latitude);
    setLongitude(route.params.longitude);
  }, [route]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    Database.getItems().then((items) => setItems(items));
  }, [route]);

  async function handleButtonPress() {
    const listItem = {
      usuario,
      titulo,
      descricao,
      date,
      dateQuest,
      latitude,
      longitude,
    };
    Database.saveItem(listItem, id).then((response) =>
      navigation.navigate('Quiz', listItem),
    );
    navigation.reset({
      routes: [{name: 'Quiz'}],
    });
  }

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((location) => {
        setLatitude(location.latitude);
        setLongitude(location.longitude);
      })
      .catch((error) => {
        const {code, message} = error;
        console.log(code, message);
      });
  }, []);

  return (
    <Container>
      <Title>Responder questionário</Title>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Subtitle>Título:</Subtitle>
        <TextInput
          onChangeText={handleTitleChange}
          TextInput
          editable={false}
          selectTextOnFocus={false}
          placeholder="Título"
          clearButtonMode="always"
          value={titulo}
        />
        <Subtitle>Usuário:</Subtitle>
        <TextInput
          onChangeText={handleUserChange}
          TextInput
          editable={false}
          selectTextOnFocus={false}
          placeholder="Usuário"
          clearButtonMode="always"
          value={usuario}
        />

        <Subtitle>Data de criação:</Subtitle>

        <TextInput
          onChangeText={handleDateChange}
          TextInput
          editable={false}
          selectTextOnFocus={false}
          placeholder="Data"
          clearButtonMode="always"
          value={date}
        />

        <SubtitleCenter>Questionário</SubtitleCenter>

        <QuestionText>Qual o seu nome?</QuestionText>

        <TextInput
          onChangeText={handleDescriptionChange}
          placeholder="Resposta"
          multiline
          numberOfLines={3}
          clearButtonMode="always"
          value={descricao}
        />

        <QuestionText>
          Qual o seu telefone de contato? De preferencia whatsapp
        </QuestionText>

        <TextInput
          onChangeText={handleDescriptionChange}
          placeholder="(11) 99999-9999"
          multiline
          numberOfLines={3}
          clearButtonMode="always"
          value={descricao}
        />

        <QuestionText>Em que área você reside(urbana ou rural)?</QuestionText>

        <TextInput
          onChangeText={handleDescriptionChange}
          placeholder="Resposta"
          multiline
          numberOfLines={3}
          clearButtonMode="always"
          value={descricao}
        />

        <QuestionText>Como poderemos ajudar?</QuestionText>

        <TextInput
          onChangeText={handleDescriptionChange}
          placeholder="Resposta"
          multiline
          numberOfLines={3}
          clearButtonMode="always"
          value={descricao}
        />

        <QuestionText>Data de resposta do questionário</QuestionText>

        <TextInput
          onChangeText={handleDateChange}
          TextInput
          editable={false}
          selectTextOnFocus={false}
          placeholder="Data"
          clearButtonMode="always"
          value={date}
        />

        <SubtitleCenter>Localização atual </SubtitleCenter>
        <LocationContainer>
          <LocationText onChangeText={handleLatChange} value={latitude}>
            Latitude: {latitude}
          </LocationText>
          <LocationText onChangeText={handleLongChange} value={longitude}>
            Longitude: {longitude}
          </LocationText>
        </LocationContainer>

        <AnswerButton onPress={handleButtonPress}>
          <Icon name="save" size={24} color="gray" />
          <AnswerButtonText>Responder</AnswerButtonText>
        </AnswerButton>
      </ScrollView>
    </Container>
  );
};

export default AnswerQuiz;
