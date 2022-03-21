import styled from '@emotion/styled';
import { AiOutlineSearch } from 'react-icons/ai';

import Input from '../Input';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.primary};
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  height: inherit;
  margin: 0 auto;
`;

export const Tab = styled.ul`
  display: flex;
  gap: 20px;
  height: inherit;
`;
export const Inp = styled(Input)`
  padding: 1px 25px 1px 10px;
  font-size: 12px;
  color: white;
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-left: none;

  ::placeholder,
  ::-webkit-input-placeholder,
  ::-ms-input-placeholder {
    color: white;
  }
`;
export const Search = styled.div`
  position: relative;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  cursor: pointer;
  opacity: 0.5;
  stroke-width: 40;
  transition: all 0.15s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
