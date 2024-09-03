import styled from 'styled-components';
import { SearchInputProps } from '@/types';

export const CharactersHeaderSearchWrapper = styled.div<SearchInputProps>`
  background-color: ${(props) => (props.$primary ? '#fff' : '#fdecec')};
  margin: 30px 0;
  padding: 10px;
  width: ${(props) => (props.$primary ? '80%' : '50%')};
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  height: ${(props) => (props.$primary ? '15px' : 'auto')};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CharactersHeaderSearchImage = styled.div<SearchInputProps>`
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: ${(props) => (props.$primary ? '15px' : 'auto')};
  height: ${(props) => (props.$primary ? '15px' : 'auto')};
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
