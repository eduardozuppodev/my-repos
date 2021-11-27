import React from 'react';

import {
  Container,
  Title,
  Description,
  GitIcon,
  Header,
  Footer,
  FavIcon
} from './styles';

type Props = {
  title: string;
  description: string;
};

const Card: React.FC<Props> = ({ title, description }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <GitIcon />
      </Header>
      <Description>{description}</Description>
      <Footer>
        <FavIcon />
      </Footer>
    </Container>
  );
};

export default Card;
