import React from 'react';

import {
  Container,
  Title,
  Description,
  GitIcon,
  Header,
  Footer,
  FavIcon,
  LinkStyled
} from './styles';

type Props = {
  title: string;
  description: string;
  url: string;
};

const Card: React.FC<Props> = ({ title, description, url }) => {
  return (
    <Container>
      <Header>
        <LinkStyled href={url}>
          <Title>{title}</Title>
          <GitIcon />
        </LinkStyled>
      </Header>
      <Description>{description}</Description>
      <Footer>
        <FavIcon />
      </Footer>
    </Container>
  );
};

export default Card;
