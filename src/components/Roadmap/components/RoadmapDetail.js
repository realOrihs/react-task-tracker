import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const RoadmapDetailComponent = () => {
  const { id } = useParams();
  const history = useHistory();

  return (
    <div>
      <h6>Roadmap Detail</h6>
      <p>
        You have selected Roadmap -
        {id}
      </p>
      <button onClick={history.goBack}>Go Back</button>
    </div>
  );
};

export default RoadmapDetailComponent;
