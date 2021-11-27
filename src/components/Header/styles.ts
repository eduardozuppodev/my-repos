import styled from 'styled-components';
import { colors } from '../../themes';
import { pxToRem } from '../../utils/helpers';

export const Container = styled.div`
  width: 100%;
  height: ${pxToRem(60)};
  background: ${colors.header.background};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: ${pxToRem(18)};
  font-weight: 300;
  color: ${colors.header.title};
`;
