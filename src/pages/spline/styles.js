import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #7036CD;

  h1 {
    color: white;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 1200px;
    height: 100%;
  }

  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;
