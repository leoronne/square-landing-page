import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  position: relative;
  min-height: 200px;
  display: flex;
  align-items: center;

  .square-frame {
    display: none;
    right: -6.3%;
    position: absolute;
    max-width: 200px;
    opacity: 0.3;
  }

  h1 {
    font-size: 36px;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    color: var(--text-color);
    strong {
      font-size: 36px;
      font-weight: 700;
    }
  }

  @media (min-width: 551px) {
    min-height: 250px;
    .square-frame {
      display: flex;
      max-width: 250px;
    }
  }

  @media (min-width: 730px) {
    min-height: 350px;
    .square-frame {
      max-width: 350px;
    }

    h1 {
      font-size: 50px;
      strong {
        font-size: 50px;
      }
    }
  }
`;

export const SquareContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  color: var(--text-color);
  margin-top: 10px;

  .square {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    font-size: 22px;
    span {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      margin-top: 5px;
    }
  }

  @media (min-width: 568px) {
    .square {
      font-size: 35px;
      span {
        font-size: 15px;
      }
    }
  }
`;
