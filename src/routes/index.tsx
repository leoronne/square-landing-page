import React from 'react';

import { Switch } from 'react-router-dom';

import { Homepage, Contact, About } from '../pages';
import Route from './Route';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </Switch>
  </>
);

export default Routes;
