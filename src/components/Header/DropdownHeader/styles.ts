import styled, { css } from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { FaInfo } from 'react-icons/fa';
import { BiMessage } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';

import { ReactComponent as Brazil } from '~/assets/svg/brazil.svg';
import { ReactComponent as USA } from '~/assets/svg/usa.svg';

const iconCSS = css`
  width: 15px;
  height: 15px;
  color: var(--color-primary);
`;

export const Container = styled.div`
  margin: 0 15px 0 5px;
  display: flex;
  align-items: center;

  .titleDropdown {
    font-family: var(--font-family);
    font-size: 14px !important;
  }

  .ListItemIcon {
    svg {
      width: 25px;
      height: 25px;
    }
  }

  .MuiListItem-root {
    .MuiInput-underline:before,
    .Mui-focused:before {
      border-bottom: transparent !important;
    }

    .MuiInput-underline:after {
      border-bottom: transparent !important;
    }

    .MuiSelect-icon {
      color: var(--text-color);
    }
  }

  @media (min-width: 580px) {
    display: none;
  }
`;

export const ArrowIcon = styled(FiMenu)`
  cursor: pointer;
  width: 25px;
  height: 25px;
  color: var(--text-color);
`;

export const InfoIcon = styled(FaInfo)`
  ${iconCSS}
`;

export const MessageIcon = styled(BiMessage)`
  ${iconCSS}
`;

export const HomeIcon = styled(AiOutlineHome)`
  ${iconCSS}
`;

export const BrazilIcon = styled(Brazil)`
  width: 15px;
  height: 15px;
`;

export const USAIcon = styled(USA)`
  width: 15px;
  height: 15px;
`;
