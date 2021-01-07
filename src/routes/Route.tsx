/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute } from 'react-router-dom';

import DefaultLayout from '../layouts/Default';

interface RouteWrapperProps extends ReactDOMRouteProps {
  component: React.ComponentType;
  bg: 'mono' | 'dual';
}

const Route: React.FC<RouteWrapperProps> = ({ component: Component, bg, ...rest }) => {
  return (
    <ReactDOMRoute
      {...rest}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render={({ location }) => {
        return (
          <DefaultLayout bg={bg}>
            <Component />
          </DefaultLayout>
        );
      }}
    />
  );
};

export default Route;
