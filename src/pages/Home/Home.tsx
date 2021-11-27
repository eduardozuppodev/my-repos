import React from 'react';
import { Header, Card } from '../../components';
import { Container, Repos } from './styles';

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
      </Repos>
    </Container>
  );
};

export default Home;
