import styled from 'styled-components';
import { colors } from '../../themes';
import { pxToRem } from '../../utils/helpers';
import { Link } from '@material-ui/core';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.body.background};
`;

export const Repos = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  margin-top: ${pxToRem(30)};
  flex-direction: column;
`;

export const Credits = styled.span`
  font-size: ${pxToRem(10)};
  padding: ${pxToRem(20)} 0;
  color: ${colors.body.tertiary};
`;

export const LinkStyled = styled(Link).attrs({
  underline: 'none'
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
