import styled from 'styled-components';
import { colors } from '../../themes';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background: ${colors.header.background};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
  color: ${colors.header.title};
`;
