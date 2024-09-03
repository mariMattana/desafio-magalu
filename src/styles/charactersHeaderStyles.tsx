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
  text-align: center;
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

export const CharactersHeaderFiltersWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CharactersHeaderFoundText = styled.p`
  color: #d1d1d1;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const CharactersHeaderFilters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

export const CharactersHeaderFiltersImage = styled.button`
  border: none;
  background: inherit;
  font-size: inherit;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const CharactersHeaderFiltersText = styled.p`
  color: #fc7474;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const FavoriteButton = styled.button`
  border: none;
  background: inherit;
  font-size: inherit;
  cursor: pointer;
`;
