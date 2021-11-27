import styled from 'styled-components';
import { colors } from '../../themes';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  background: #f4f4f4;
`;

export const Repos = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  margin-top: 30px;
  flex-direction: column;
`;

export const Credits = styled.span`
  font-size: 10px;
  padding: 10px 0;
  color: #b6b6b6;
`;
