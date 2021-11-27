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

const Card: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>safestore-koob</Title>
        <GitIcon />
      </Header>
      <Description>
        Teste de Contratação - Koob - Aplicativo para ajudar a gerenciar o
        cadastro e acompanhamento de produtos. Cadastre seus produtos com essa
        aplicação e melhore ainda mais sua Conveniência.
      </Description>
      <Footer>
        <FavIcon />
      </Footer>
    </Container>
  );
};

export default Card;
