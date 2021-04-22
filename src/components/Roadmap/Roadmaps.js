import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import RoadmapDetailComponent from './components/RoadmapDetail';

const RoadmapComponent = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:id`} component={RoadmapDetailComponent} />
    </Switch>
  );
};

export default RoadmapComponent;
