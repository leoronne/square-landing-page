import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container, LeftArea, RightArea, Card,} from './styles';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <LeftArea>
        <h1>
          {`${t('about-1')} `}
          <strong>{t('about-2')}</strong>
        </h1>

        <hr />

        <span>{t('about-text-1')}</span>

        <span>{t('about-text-2')}</span>

        <hr />

      </LeftArea>

      <RightArea>
        <Card />
      </RightArea>
    </Container>
  );
};

export default About;
