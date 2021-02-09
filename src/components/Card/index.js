import React from 'react';

import { Container,Text } from './styles';

const Card = ({children, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Text>{children}</Text>
    </Container>
  );
};

export default Card;
