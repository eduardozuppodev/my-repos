import React, { useEffect, useState } from 'react';
import { Header, Card } from '../../components';
import api from '../../services/api';
import { Container, Repos, Credits } from './styles';

const Home: React.FC = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    api.get('/eduardozuppodev/repos').then(({ data }) => {
      setRepos(data);
    });
  }, []);

  return (
    <Container>
      <Header title="MyRepos" />
      <Repos>
        {repos.map((repo: ReposType, id: number) => (
          <Card
            key={id}
            title={repo.name}
            description={repo.description}
            url={repo.html_url}
          />
        ))}
        <Credits>Desenvolvido por Eduardo Zuppo</Credits>
      </Repos>
    </Container>
  );
};

export default Home;
