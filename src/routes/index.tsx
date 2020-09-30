import React from 'react';

import { Switch } from 'react-router-dom';

import { Homepage, Contact } from '../pages';
import Route from './Route';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </>
);

export default Routes;
