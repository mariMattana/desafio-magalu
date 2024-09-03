import styled from 'styled-components';

export const CharacterContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  color: #3a3a3a;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CharacterContent = styled.div`
  width: 80%;
  padding: 0 2vw;
  text-align: left;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CharacterContentNameFav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: space-around;
  }

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
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
    margin-left: 5%;
  }
`;

export const CharacterText = styled.p`
  font-size: 14px;
`;

export const StarImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
