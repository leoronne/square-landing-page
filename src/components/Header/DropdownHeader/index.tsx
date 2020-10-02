import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MenuItem, Fade, ListItemIcon } from '@material-ui/core';

import { useLanguage } from '../../../hooks/useLanguage';

import { useStyles, Select, MenuContainer } from '../../../styles/MaterialUI';

import { Container, ArrowIcon, InfoIcon, MessageIcon, HomeIcon, BrazilIcon, USAIcon } from './styles';

const DropdownHeader: React.FC = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const classes = useStyles();

  const [open, setOpen] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => setOpen(null);

  return (
    <Container>
      <ArrowIcon onClick={handleClick} />
      <MenuContainer id="fade-menu" anchorEl={open} keepMounted open={Boolean(open)} onClose={handleClose} TransitionComponent={Fade}>
        <Link to="/" className="titleDropdown">
          <MenuItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <span>{t('homepage')}</span>
          </MenuItem>
        </Link>

        <Link to="/about" className="titleDropdown">
          <MenuItem>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <span>{t('about')}</span>
          </MenuItem>
        </Link>

        <Link to="/contact" className="titleDropdown">
          <MenuItem>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <span>{`${t('contact-1')} ${t('contact-2')}`}</span>
          </MenuItem>
        </Link>

        <MenuItem>
          <ListItemIcon>{language === 'pt' ? <BrazilIcon /> : <USAIcon />}</ListItemIcon>
          <Select value={language} onChange={e => changeLanguage(String(e.target.value))} MenuProps={{ classes: { paper: classes.selectOptions } }}>
            <MenuItem value="en">
              <p>English (United States)</p>
            </MenuItem>
            <MenuItem value="pt">
              <p>Português (Brasil)</p>
            </MenuItem>
          </Select>
        </MenuItem>
      </MenuContainer>
    </Container>
  );
};

export default DropdownHeader;
