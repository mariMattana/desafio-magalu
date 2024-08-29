import styled from 'styled-components';

export const CharactersCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CharactersCardImgWrapper = styled.div`
  width: 150px;
  border-bottom: 3px solid red;
  display: flex;
`;

export const CharactersCardInfoWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  align-items: center;
`;

export const CharactersCardInfoText = styled.p`
  font-size: 12px;
  font-weight: bold;
  font-family: verdana, sans-serif;
`;
