import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import GetLocation from 'react-native-get-location';
import Database from '../../database';

import {
  Container,
  Title,
  TextInput,
  SaveButton,
  SaveButtonText,
} from './styles';

const CreateQuiz = ({route, navigation}) => {
  const id = route.params ? route.params.id : undefined;
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [titulo, setTitulo] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [dateAtualizacao, setAtualizacao] = useState(null);

  useEffect(() => {
    if (!route.params) return;
    setTitulo(route.params.titulo);
    setUsuario(route.params.usuario);
    setAtualizacao(route.params.dateAtualizacao);
  }, [route]);

  function handleTitleChange(titulo) {
    setTitulo(titulo);
  }
  function handleUserChange(usuario) {
    setUsuario(usuario);
  }
  function handleDateAtualizacaoChange(dateAtualizacao) {
    setAtualizacao(dateAtualizacao);
  }

  async function handleButtonPress() {
    const listItem = {titulo, usuario, dateAtualizacao};
    Database.saveItem(listItem, id).then((response) =>
      navigation.navigate('Home', listItem),
    );
    navigation.reset({
      routes: [{name: 'Home'}],
    });
  }

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

  return (
    <Container>
      <Title>Adicionar o seu questionário</Title>
      <TextInput
        onChangeText={handleTitleChange}
        placeholder="Título"
        clearButtonMode="always"
        value={titulo}
      />

      <TextInput
        onChangeText={handleUserChange}
        placeholder="Usuário"
        clearButtonMode="always"
        value={usuario}
      />

      <TextInput
        onChangeText={handleDateAtualizacaoChange}
        placeholder="Data"
        clearButtonMode="always"
        value={dateAtualizacao}
      />

      <SaveButton onPress={handleButtonPress}>
        <Icon name="save" size={24} color="gray" />
        <SaveButtonText>Criar</SaveButtonText>
      </SaveButton>
    </Container>
  );
};

export default CreateQuiz;
