import styled from '@emotion/styled';
import { IInp } from './types';

export const Inp = styled.input<IInp>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border: ${({ bordercolor }) => `1px solid ${borderColor}`};
`;
