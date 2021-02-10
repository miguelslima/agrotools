import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #555573;
  margin: 20px;
  border-radius: 10px;

  padding: 10px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 200px;
`;

export const TitleQuestion = styled.Text`
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  margin-right: 10px;
  color: #fff;
`;

export const ItemQuestion = styled.Text`
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  color: #fff;
  width: 130px;
`;

export const ContainerFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const AnswerText = styled.Text`
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  color: #fff;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
`;
