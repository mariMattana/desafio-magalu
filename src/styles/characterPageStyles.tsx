import styled from 'styled-components';

export const CharacterBackgroundWrapper = styled.div`
  background: #a1a3a5;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.1);
  font-size: 20vw;
  font-weight: bold;
  z-index: -1;
`;

export const CharacterContentPosition = styled.div`
  position: relative;
  z-index: 1;
  color: white; /* Main content text color */
  text-align: center;
  padding: 0 5vw;
`;

export const CharacterHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
`;
