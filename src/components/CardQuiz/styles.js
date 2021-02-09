import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #888;
  margin: 20px;
  border-radius: 10px;

  padding: 10px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleQuestion = styled.Text`
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  margin-right: 10px;
`;

export const ItemQuestion = styled.Text`
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const ContainerFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
`;
