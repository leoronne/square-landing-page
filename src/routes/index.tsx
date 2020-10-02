import React from 'react';

import { Switch } from 'react-router-dom';

import { Homepage, Contact, About } from '../pages';
import Route from './Route';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" bg="mono" exact component={Homepage} />
      <Route path="/contact" bg="dual" component={Contact} />
      <Route path="/about" bg="dual" component={About} />
    </Switch>
  </>
);

export default Routes;
