import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: #fff;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  margin: 10px 0;
  font-size: 24px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin: 10px 0px;
  font-size: 20px;
  width: 100%;
  border-width: 1px;
  border-color: #555;
  border-radius: 10px;
`;
export const SaveButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  padding-top: 10px;
`;

export const SaveButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 20px;
  padding-left: 10px;
`;
