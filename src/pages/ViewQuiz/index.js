import React, {useState, useEffect} from 'react';
import {Text, TextInput, ScrollView} from 'react-native';
import GetLocation from 'react-native-get-location';
import Database from '../../database';

import {Container} from './styles';

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

  function handleTitleChange(titulo) {
    setTitulo(titulo);
  }
  function handleUserChange(usuario) {
    setUsuario(usuario);
  }
  function handleDescriptionChange(descricao) {
    setDescricao(descricao);
  }
  function handleDateChange(setDate) {
    setDate(setDate);
  }
  function handleDateQuestChange(dateQuest) {
    setDateQuest(dateQuest);
  }
  function handleLatChange(location) {
    setLocationLat(location);
  }
  function handleLongChange(location1) {
    setLocationLong(location1);
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
      dateAtualizacao,
      dateQuest,
      latitude,
      longitude,
    };
    Database.saveItem(listItem, id).then((response) =>
      navigation.navigate('Home', listItem),
    );
    navigation.reset({
      routes: [{name: 'Home'}],
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

  // let text = 'Obtendo..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location, location1);
  // }

  return (
    <Container>
      <Text>Respostas do questionário</Text>
      <ScrollView>
        <Text>Título:</Text>
        <TextInput
          onChangeText={handleTitleChange}
          TextInput
          editable={false}
          selectTextOnFocus={false}
          placeholder="Título"
          clearButtonMode="always"
          value={titulo}
        />
        <Text>Usuário:</Text>
        <TextInput
          onChangeText={handleUserChange}
          TextInput
          editable={false}
          selectTextOnFocus={false}
          placeholder="Usuário"
          clearButtonMode="always"
          value={usuario}
        />

        <Text>Data de criação:</Text>

        <TextInput
          onChangeText={handleDateChange}
          TextInput
          editable={false}
          selectTextOnFocus={false}
          placeholder="Data"
          clearButtonMode="always"
          value={date}
        />

        <Text>Questionário</Text>

        <Text>O que está ocorrendo na sua área?</Text>

        <TextInput
          onChangeText={handleDescriptionChange}
          placeholder="Resposta"
          multiline
          numberOfLines={3}
          clearButtonMode="always"
          value={descricao}
          TextInput
          editable={false}
          selectTextOnFocus={false}
        />

        <Text>Data de resposta do questionário:</Text>

        <TextInput
          onChangeText={handleDateQuestChange}
          placeholder="Resposta"
          clearButtonMode="always"
          value={dateQuest}
          TextInput
          editable={false}
          selectTextOnFocus={false}
        />

        <Text>Localização atual: </Text>
        <Text
          onChangeText={handleLatChange}
          value={latitude}
          TextInput
          editable={false}
          selectTextOnFocus={false}>
          Latitude: {latitude}
        </Text>
        <Text
          onChangeText={handleLongChange}
          value={longitude}
          TextInput
          editable={false}
          selectTextOnFocus={false}>
          Longitude: {longitude}
        </Text>
      </ScrollView>
    </Container>
  );
};

export default ViewQuiz;
