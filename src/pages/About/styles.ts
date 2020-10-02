import styled from 'styled-components';

import business from '~/assets/svg/business.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-direction: column;

  padding-top: 40px;

  @media (min-width: 868px) {
    flex-direction: row;
  }
`;

export const LeftArea = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 20px;
  color: var(--text-color);

  overflow-y: auto;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h1 {
    font-size: 50px;
    font-weight: 400;
    text-transform: uppercase;

    strong {
      font-weight: 700;
    }
  }

  hr {
    margin: 55px 0;
    max-width: 61px;
    border: 1px solid var(--text-color);
  }

  span {
    font-size: 18px;
    line-height: 28px;
  }

  span + span {
    margin-top: 15px;
  }

  @media (min-width: 868px) {
    max-width: 370px;
  }

  @media (min-width: 1380px) {
    max-width: 450px;
  }
`;

export const RightArea = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px 0 80px;

  display: none;

  @media (min-width: 868px) {
    display: inline;
  }
`;

export const Card = styled.div`
  background-color: white;
  background-image: url(${business});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  padding: 50px;

  overflow-y: auto;

  box-shadow: var(--box-shadow);
`;

export const SocialIcons = styled.div`
  margin-top: 55px;
  display: flex;
  align-items: center;

  svg + svg {
    margin-left: 10px;
  }
`;
