import React from 'react';
import { useTranslation } from 'react-i18next';

import SupportModal from './SupportModal';
import { SupportForm } from '../../components';

import { Container, LeftArea, RightArea, Card, SocialIcons, FacebookIcon, LinkedInIcon, TwitterIcon, GoogleIcon } from './styles';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <LeftArea>
        <h1>
          {`${t('contact-1')} `}
          <strong>{t('contact-2')}</strong>
        </h1>

        <hr />

        <span>{t('contact-text-1')}</span>

        <SupportModal />

        <hr />

        <span>
          <strong>{`${t('adress')}: `}</strong>
          123 Palo Alto, Palo Alto, CA 94300
        </span>
        <span>
          <strong>{`${t('phone')}: `}</strong>
          +1 234-567-8910
        </span>
        <span>
          <strong>{`${t('email')}: `}</strong>
          contact@yourdomain.net
        </span>

        <SocialIcons>
          <FacebookIcon />
          <GoogleIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </SocialIcons>
      </LeftArea>

      <RightArea>
        <Card>
          <SupportForm />
        </Card>
      </RightArea>
    </Container>
  );
};

export default Contact;
