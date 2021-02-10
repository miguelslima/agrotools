import React, {useState, useEffect} from 'react';
import {Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import GetLocation from 'react-native-get-location';
import Icon from 'react-native-vector-icons/Feather';

import Database from '../../database';

import {Container} from './styles';

const AnswerQuiz = ({route, navigation}) => {
  const id = route.params ? route.params.id : undefined;
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [descricao, setDescricao] = useState(null);
  const [titulo, setTitulo] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [data, setData] = useState(null);
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
  function handleDateChange(data) {
    setData(data);
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
    setData(route.params.data);
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
      data,
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

  // useEffect(() => {
  //   (async () => {
  //     let {status} = await Location.requestPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     let location1 = await Location.getCurrentPositionAsync({});
  //     setLocationLat(location.coords.latitude);
  //     setLocationLong(location.coords.longitude);
  //   })();
  // }, []);

  // let text = 'Obtendo..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location, location1);
  // }

  return (
    <Container>
      <Text>Responder questionário</Text>
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
          value={data}
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
        />

        <Text>Data de resposta do questionário:</Text>

        <TextInput
          onChangeText={handleDateQuestChange}
          placeholder="Resposta"
          clearButtonMode="always"
          value={dateQuest}
        />

        <Text>Localização atual: </Text>
        <Text onChangeText={handleLatChange} value={latitude}>
          Latitude: {latitude}
        </Text>
        <Text onChangeText={handleLongChange} value={longitude}>
          Longitude: {longitude}
        </Text>

        <TouchableOpacity onPress={handleButtonPress}>
          <Icon name="save" size={16} color="#888" />
          <Text>Responder</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

export default AnswerQuiz;
