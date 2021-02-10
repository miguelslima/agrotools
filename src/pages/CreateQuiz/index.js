import React, {useState, useEffect, useCallback} from 'react';
import {Alert, DatePickerAndroid, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import GetLocation from 'react-native-get-location';
import Database from '../../database';

import DateInput from '../../components/DateInput';

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
  const [titulo, setTitulo] = useState('');
  const [usuario, setUsuario] = useState('');

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (!route.params) return;
    setTitulo(route.params.titulo);
    setUsuario(route.params.usuario);
    setData(route.params.data);
  }, [route]);

  function handleTitleChange(titulo) {
    setTitulo(titulo);
  }
  function handleUserChange(usuario) {
    setUsuario(usuario);
  }

  async function handleButtonPress() {
    if (titulo.length === 0 || usuario.length === 0 || date.length === 0) {
      Alert.alert('Preencha todos os dados solicitados');
      return;
    }

    const listItem = {titulo, usuario, date};
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
      <DateInput date={date} onChange={setDate} />

      <SaveButton onPress={handleButtonPress}>
        <Icon name="save" size={24} color="gray" />
        <SaveButtonText>Criar</SaveButtonText>
      </SaveButton>
    </Container>
  );
};

export default CreateQuiz;
