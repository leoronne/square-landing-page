import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 55px;

  button {
    border: 2px solid white;
    span {
      color: white !important;
    }
    &:hover {
      background: white !important;
      span {
        color: var(--color-primary) !important;
      }
    }
  }

  @media (min-width: 868px) {
    display: none;
  }
`;

export const Content = styled.div`
  padding-bottom: 20px;
`;
