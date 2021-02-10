import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import GetLocation from 'react-native-get-location';
import Database from '../../database';

import {
  Container,
  Title,
  Subtitle,
  SubtitleCenter,
  TextInput,
  QuestionText,
  LocationText,
  AnswerButton,
  AnswerButtonText,
} from './styles';

const ViewQuiz = ({route, navigation}) => {
  const id = route.params ? route.params.id : undefined;
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [descricao, setDescricao] = useState(null);
  const [titulo, setTitulo] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [date, setDate] = useState(null);
  const [dateQuest, setDateQuest] = useState(null);

  const [questionsTitles, setQuestionsTitles] = useState([]);

  useEffect(() => {
    if (!route.params) return;
    setTitulo(route.params.titulo);
    setUsuario(route.params.usuario);
    setDescricao(route.params.descricao);
    setDate(route.params.date);
    setDateQuest(route.params.dateQuest);
    setLatitude(route.params.latitude);
    setLongitude(route.params.longitude);
    setQuestionsTitles(route.params.questionsTitles);
  }, [route]);
  console.log(questionsTitles);

  const [items, setItems] = useState([]);

  useEffect(() => {
    Database.getItems().then((items) => setItems(items));
  }, [route]);

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
      <Title>Respostas do questionário</Title>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Subtitle>Título:</Subtitle>
        <TextInput
          TextInput
          editable={false}
          selectTextOnFocus={false}
          placeholder="Título"
          clearButtonMode="always"
          value={titulo}
        />
        <Subtitle>Usuário:</Subtitle>
        <TextInput
          TextInput
          editable={false}
          selectTextOnFocus={false}
          placeholder="Usuário"
          clearButtonMode="always"
          value={usuario}
        />

        <Subtitle>Data de criação:</Subtitle>

        <TextInput
          TextInput
          editable={false}
          selectTextOnFocus={false}
          placeholder="Data"
          clearButtonMode="always"
          value={date}
        />

        <SubtitleCenter>Questionário</SubtitleCenter>

        <Subtitle>Como podemos ajudar?</Subtitle>

        <TextInput
          placeholder="Resposta"
          multiline
          numberOfLines={3}
          clearButtonMode="always"
          value={descricao}
          TextInput
          editable={false}
          selectTextOnFocus={false}
        />

        {questionsTitles === undefined ? (
          <View />
        ) : (
          <View>
            {questionsTitles.map((questionsTitle, index) => (
              <View key={index}>
                <QuestionText>{questionsTitle}</QuestionText>

                <TextInput
                  placeholder="Resposta"
                  multiline
                  numberOfLines={3}
                  clearButtonMode="always"
                  value={descricao}
                  editable={false}
                  selectTextOnFocus={false}
                />
              </View>
            ))}
          </View>
        )}

        <Subtitle>Data de resposta do questionário:</Subtitle>

        <TextInput
          placeholder="Resposta"
          clearButtonMode="always"
          value={dateQuest}
          TextInput
          editable={false}
          selectTextOnFocus={false}
        />

        <SubtitleCenter>Localização atual: </SubtitleCenter>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <LocationText
            value={latitude}
            TextInput
            editable={false}
            selectTextOnFocus={false}>
            Latitude: {latitude}
          </LocationText>
          <LocationText
            value={longitude}
            TextInput
            editable={false}
            selectTextOnFocus={false}>
            Longitude: {longitude}
          </LocationText>
        </View>
      </ScrollView>
    </Container>
  );
};

export default ViewQuiz;
