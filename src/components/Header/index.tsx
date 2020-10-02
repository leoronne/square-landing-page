import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MenuItem } from '@material-ui/core';

import getCurrentURL from '../../utils/getCurrentURL';

import { useLanguage } from '../../hooks/useLanguage';

import { useStyles, Select } from '../../styles/MaterialUI';

import DropdownHeader from './DropdownHeader';

import { ReactComponent as BrazilIcon } from '~/assets/svg/brazil.svg';
import { ReactComponent as USAIcon } from '~/assets/svg/usa.svg';

import logo from '~/assets/img/logo.png';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './styles';

const Header: React.FC = () => {
  const { language, changeLanguage } = useLanguage();
  const classes = useStyles();
  const { t } = useTranslation();

  const currentUrl = getCurrentURL();

  const about = '/about';
  const contact = '/contact';

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h1>
          <Link to="/">
            <img src={logo} alt="Square" />
          </Link>
        </h1>
      </HeaderLeft>

      <HeaderRight>
        <Link to={about} className={`${currentUrl === about ? 'navigation-links-active' : 'navigation-links'}`}>
          {`${t('about-1')} ${t('about-2')}`}
        </Link>
        <Link to={contact} className={`${currentUrl === contact ? 'navigation-links-active' : 'navigation-links'}`}>
          {`${t('contact-1')} ${t('contact-2')}`}
        </Link>

        <Select value={language} onChange={e => changeLanguage(String(e.target.value))} MenuProps={{ classes: { paper: classes.selectOptions } }}>
          <MenuItem value="en">
            <USAIcon />
            <span>English (United States)</span>
          </MenuItem>
          <MenuItem value="pt">
            <BrazilIcon />
            <span>Português (Brasil)</span>
          </MenuItem>
        </Select>
      </HeaderRight>

      <DropdownHeader />
    </HeaderWrapper>
  );
};

export default Header;
