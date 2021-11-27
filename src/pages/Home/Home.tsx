import React, { useEffect, useState } from 'react';
import { Header, Card } from '../../components';
import api from '../../services/api';
import { Container, Repos, Credits, LinkStyled } from './styles';

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
        <LinkStyled href={'https://github.com/eduardozuppodev'}>
          <Credits>Desenvolvido por Eduardo Zuppo</Credits>
        </LinkStyled>
      </Repos>
    </Container>
  );
};

export default Home;
