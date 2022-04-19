import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Spline from '../pages/spline';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact element={<Spline/>} />
    </Switch>
  );
}