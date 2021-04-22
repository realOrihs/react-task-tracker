import React, { useState } from 'react';
import { Link, generatePath, useRouteMatch } from 'react-router-dom';

const RoadmapsListComponent = (props) => {
  const { url } = useRouteMatch();

  return (
    <div style={{ width: '90%' }}>
      {props.roadmapsList.map((item, index) => (
        <div className="roadmapli" key={`roadmap${item.id}`}>
          <Link to={`/currentRoadmap/${item.id}`} onClick={() => props.setRoadmap(item)}>{item.name}</Link>
          <div>
            {item.creator}
          </div>
          <div>
            {item.type_of_access}
          </div>
          <div>
            {item.date}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadmapsListComponent;
