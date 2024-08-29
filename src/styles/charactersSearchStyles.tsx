import styled from 'styled-components';
import { SearchInputProps } from '@/types';

export const CharactersHeaderSearchWrapper = styled.div<SearchInputProps>`
  background-color: ${(props) => (props.$primary ? '#fff' : '#fdecec')};
  margin: 30px 0;
  padding: 10px;
  width: 50%;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
`;

export const CharactersHeaderSearchImage = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export const CharactersHeaderSearchInput = styled.input<SearchInputProps>`
  border: none;
  background: none;
  background-color: inherit;
  outline: none;
  padding: 5px;
  width: 100%;
  &::placeholder {
    color: ${(props) => (props.$primary ? '#929292' : '#fc7474')};
  }
`;
