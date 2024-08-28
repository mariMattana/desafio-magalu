import styled, { css } from 'styled-components';

const sharedHeaderStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CharactersHeaderWrapper = styled.div`
  ${sharedHeaderStyles};
  padding: 0 30px;
`;

export const CharactersHeaderTitleWrapper = styled.div`
  ${sharedHeaderStyles};
`;

export const CharactersHeaderTitle = styled.h1`
  color: #404040;
  margin: 0;
`;

export const CharactersHeaderText = styled.p`
  color: #bebebe;
  font-size: 14px;
`;

export const CharactersHeaderTitleImage = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  max-width: 600px;
  margin-bottom: 20px;
`;

export const CharactersHeaderSearchWrapper = styled.div`
  background-color: #fdecec;
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

export const CharactersHeaderSearchInput = styled.input`
  border: none;
  background: none;
  background-color: inherit;
  outline: none;
  padding: 5px;
  width: 100%;
  &::placeholder {
    color: #fc7474;
  }
`;

export const CharactersHeaderFiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justifycontent: center;
  padding: 20px;
`;
