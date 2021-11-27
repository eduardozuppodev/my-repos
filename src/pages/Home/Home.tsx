import React from 'react';
import { Header, Card } from '../../components';
import { Container, Repos, Credits } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header title="MyRepos" />
      <Repos>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Credits>Desenvolvido por Eduardo Zuppo</Credits>
      </Repos>
    </Container>
  );
};

export default Home;
