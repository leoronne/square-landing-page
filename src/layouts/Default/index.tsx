import React from 'react';

import { Header } from '../../components';

import { Container, Main } from './styles';

const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

export default Default;
