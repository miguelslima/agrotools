import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: #f2f2f2;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  margin: 10px 0;
  font-size: 24px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  paddingLeft: 20,
})`
  margin: 10px 0;
  font-size: 20px;
  width: 100%;
  border-width: 1px;
  border-color: #555;
  border-radius: 10px;
`;

export const CreateQuestionButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
  background: #888;
  justify-content: center;
  align-items: center;
`;

export const CreateQuestionButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 20px;
  padding-left: 10px;
`;

export const SaveButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  justify-content: center;
`;

export const SaveButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 20px;
  padding-left: 10px;
`;
