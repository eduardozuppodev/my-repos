import styled from 'styled-components';
import { colors } from '../../themes';
import { GitHub, Favorite, FavoriteBorderOutlined } from '@material-ui/icons';
import { Link } from '@material-ui/core';
import { pxToRem, getTheme } from '../../utils/helpers';

// Breakpoints
const mobile = getTheme('inTablet');

export const Container = styled.div`
  margin: ${pxToRem(8)} 0;

  width: ${pxToRem(450)};
  background: ${colors.header.title};

  -webkit-box-shadow: 0 0 ${pxToRem(2)} ${pxToRem(-10)} ${colors.body.black};
  box-shadow: 0 0 ${pxToRem(20)} ${pxToRem(0.2)} ${colors.body.secondary};

  padding: ${pxToRem(20)};

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${mobile} {
    width: ${pxToRem(400)};
  }
`;

export const Title = styled.span`
  color: ${colors.body.title};
  font-size: ${pxToRem(14)};
`;

export const Description = styled.p`
  color: ${colors.body.tertiary};
  font-size: ${pxToRem(10)};
  margin-top: ${pxToRem(10)};
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

export const FavIconUnderline = styled(FavoriteBorderOutlined).attrs({
  fontSize: 'small',
  color: 'error'
})`
  margin-top: ${pxToRem(10)};
  cursor: pointer;
  color: ${colors.body.error};
`;

export const FavIcon = styled(Favorite).attrs({
  fontSize: 'small',
  color: 'error'
})`
  margin-top: ${pxToRem(10)};
  cursor: pointer;
  color: ${colors.body.error};
`;

export const LinkStyled = styled(Link).attrs({
  underline: 'none'
})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
