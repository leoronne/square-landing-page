import React from 'react';

import { Header } from '../../components';

import { Container, Main } from './styles';

const Default: React.FC<{ bg: 'mono' | 'dual' }> = ({ children, bg }) => {
  return (
    <Container background={bg}>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

export default Default;
