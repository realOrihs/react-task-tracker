import React, { useState } from 'react';
import { Link, generatePath, useRouteMatch } from 'react-router-dom';

const Roadmap = (props) => {
  const { url } = useRouteMatch();

  return (
    <div style={{ width: '90%' }}>
      <div className="roadmapli">
        <div>{props.roadmap.name}</div>
        <div>
          {props.roadmap.creator}
        </div>
        <div>
          {props.roadmap.type_of_access}
        </div>
        <div>
          {props.roadmap.date}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
