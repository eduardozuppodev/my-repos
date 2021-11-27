import React, { useState } from 'react';
import { If } from '../';

import {
  Container,
  Title,
  Description,
  GitIcon,
  Header,
  Footer,
  FavIconUnderline,
  LinkStyled,
  FavIcon
} from './styles';

type Props = {
  title: string;
  description: string;
  url: string;
};

const Card: React.FC<Props> = ({ title, description, url }) => {
  const [fav, setFav] = useState(false);

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
        <If condition={!fav}>
          <FavIconUnderline onClick={() => setFav(true)} />
        </If>
        <If condition={!!fav}>
          <FavIcon onClick={() => setFav(false)} />
        </If>
      </Footer>
    </Container>
  );
};

export default Card;
