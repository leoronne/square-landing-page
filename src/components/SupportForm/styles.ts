/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  form {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .field + .field {
      margin-top: 20px;
    }

    button {
      margin-top: 20px;
    }

    textarea {
      min-height: 100px;
      max-height: 100px;
      overflow-y: auto;
    }
  }

  @media (min-width: 868px) {
    button {
      max-width: 250px;
    }
  }
`;
