import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: #f2f2f2;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 25px;
  text-align: center;
  margin-bottom: 5px;
`;

export const Subtitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
`;

export const SubtitleCenter = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  text-align: center;
  padding-top: 15px;
`;

export const TextInput = styled.TextInput`
  height: 40px;
  border-color: gray;
  border-width: 1px;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0;
`;

export const QuestionText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
`;

export const LocationText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  background-color: #777;
  border-radius: 10px;
  color: #f2f2f2;
  font-weight: bold;
  padding: 15px;
  font-size: 15px;
`;

export const AnswerButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  justify-content: center;
`;

export const AnswerButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 20px;
  padding-left: 10px;
`;
