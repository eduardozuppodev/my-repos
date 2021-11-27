import styled from 'styled-components';
import { colors } from '../../themes';
import { GitHub, Favorite, FavoriteBorderOutlined } from '@material-ui/icons';

export const Container = styled.div`
  margin: 10px 0;

  width: 500px;
  height: 140px;
  background: ${colors.header.title};

  -webkit-box-shadow: 0px 0px 2px -10px ${colors.body.black};
  box-shadow: 0px 0px 20px 0.2px ${colors.body.secondary};

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.span`
  color: ${colors.body.title};
  font-size: 14px;
`;

export const Description = styled.p`
  color: ${colors.body.tertiary};
  font-size: 10px;
  margin-top: 10px;
  text-align: justify;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GitIcon = styled(GitHub).attrs({
  fontSize: 'small'
})``;

export const FavIcon = styled(FavoriteBorderOutlined).attrs({
  fontSize: 'small',
  color: 'error'
})`
  margin-top: 10px;
  cursor: pointer;
  color: 'red';
`;
