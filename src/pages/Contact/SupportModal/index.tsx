import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, IconButton, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MdClose } from 'react-icons/md';

import { SupportForm } from '../../../components';

import { ButtonOutlined, DialogTitle } from '../../../styles/MaterialUI';

import { Container } from './styles';

const SupportModal: React.FC = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const windowSize = useMediaQuery('(min-width:868px)');

  useEffect(() => {
    if (windowSize) {
      setOpen(false);
    }
  }, [windowSize]);

  return (
    <Container>
      <ButtonOutlined type="button" onClick={() => setOpen(true)}>
        <span>{t('sendmessage')}</span>
      </ButtonOutlined>

      <Dialog open={open} maxWidth="lg" fullWidth>
        <DialogTitle disableTypography>
          <Typography variant="h6">{t('sendmessage')}</Typography>
          <IconButton onClick={() => setOpen(false)} size="small">
            <MdClose size={15} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <SupportForm />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default SupportModal;
