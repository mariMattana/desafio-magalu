import styled from 'styled-components';

export const CharacterContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  color: #3a3a3a;
`;

export const CharacterContent = styled.div`
  padding: 0 2vw;
  text-align: left;
`;

export const CharacterContentNameFav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 40px;
  }
`;

export const CharacterComicsMovWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;

export const CharacterContentComicsMov = styled.div`
  flex: 1;
`;

export const CharacterComicsMovText = styled.p`
  font-size: 10px;
  margin-bottom: 0;
`;

export const CharacterComicsMovRat = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CharacterImageWrapper = styled.div`
  position: relative;
  right: 15%;
`;

export const CharacterText = styled.p`
  font-size: 14px;
`;
