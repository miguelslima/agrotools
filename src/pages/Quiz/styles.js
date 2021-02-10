import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const NoQuestionnaire = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NoQuestionnaireText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 40px;
  text-align: center;
`;

export const ButtonCreate = styled.TouchableOpacity`
  background: #888;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

export const CreateQuiz = styled.Text`
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
`;
