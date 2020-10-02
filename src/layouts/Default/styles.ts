import styled from 'styled-components';

export const Container = styled.div<{ background: 'mono' | 'dual' }>`
  width: 100%;
  height: 100%;
  background: ${props => (props.background === 'dual' ? 'linear-gradient(90deg, var(--body-background) 55%, var(--body-background-secondary) 45%)' : 'var(--body-background)')};

  padding: 40px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .navigation-links,
  .navigation-links-active {
    color: var(--text-color);
    text-decoration: none;
    font-size: 17px;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
  }

  .navigation-links-active:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--text-color);
    transition: all var(--transition);
    width: 100%;
  }

  .navigation-links:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--text-color);
    visibility: hidden;
    transition: all var(--transition);
  }

  .navigation-links:hover:before {
    visibility: visible;
    width: 100%;
  }

  .navigation-links:hover {
    transition: var(--transition);
  }

  @media (min-width: 986px) {
    padding: 40px 170px;
  }
`;

export const Main = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
