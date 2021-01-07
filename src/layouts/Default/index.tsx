import React from 'react';

import { Header, ConsentNotification } from '../../components';

import { Container, Main } from './styles';

const Default: React.FC<{ bg: 'mono' | 'dual' }> = ({ children, bg }) => {
  return (
    <Container background={bg}>
      <Header />
      <ConsentNotification />
      <Main>{children}</Main>
    </Container>
  );
};

export default Default;
