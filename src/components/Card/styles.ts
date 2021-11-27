import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { GitHub, Favorite } from '@material-ui/icons';

export const Container = styled.div`
  margin: 10px 0;

  width: 500px;
  height: 140px;
  background: #fff;

  -webkit-box-shadow: 0px 0px 15px -10px #000000;
  box-shadow: 0px 0px 5px 0.2px #f1f8fa;

  padding: 20px;
`;

export const Title = styled.span`
  color: #313131;
  font-size: 14px;
`;

export const Description = styled.p`
  color: #b6b6b6;
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

export const FavIcon = styled(Favorite).attrs({
  fontSize: 'small',
  color: 'error'
})`
  margin-top: 10px;
  cursor: pointer;
  color: 'red';
`;
