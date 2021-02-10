import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 10px 0 10px;
`;

export const DateButton = styled.TouchableOpacity`
  padding: 0 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DateText = styled.Text`
  font-size: 20px;
  color: #888;
  margin-left: 15px;
`;

export const Picker = styled.View`
  background: #777;
  padding: 15px 30px;
  margin-top: 30px;
`;
