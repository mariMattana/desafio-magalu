import styled from 'styled-components';

export const CharactersListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const CharactersListItemsWrapper = styled.li`
  display: grid;
  place-items: center;
  padding: 10px 0;
  box-sizing: border-box;
`;
