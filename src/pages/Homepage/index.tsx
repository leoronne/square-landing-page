import React from 'react';
import { useTranslation } from 'react-i18next';
import Timer from 'react-compound-timer';

import cuttedSquare from '~/assets/img/cutted-square.png';

import { Container, SquareContainer, Header } from './styles';

const Homepage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Header>
        <h1>
          {t('title1')}
          <strong>{t('title2')}</strong>
          <br />
          {t('title3')}
          <strong>{t('title4')}</strong>
        </h1>
        <img src={cuttedSquare} alt="" className="square-frame" />
      </Header>

      <Timer initialTime={10444645000} startImmediately direction="backward">
        {() => (
          <SquareContainer>
            <div className="square">
              <Timer.Days />
              <span>days</span>
            </div>
            <div className="square">
              <Timer.Hours />
              <span>hours</span>
            </div>
            <div className="square">
              <Timer.Minutes />
              <span>minutes</span>
            </div>
            <div className="square">
              <Timer.Seconds />
              <span>seconds</span>
            </div>
          </SquareContainer>
        )}
      </Timer>
    </Container>
  );
};

export default Homepage;
