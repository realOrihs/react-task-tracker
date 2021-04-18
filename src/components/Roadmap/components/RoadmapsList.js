import React, { useState } from "react";
import { Link, generatePath, useRouteMatch } from "react-router-dom";

const RoadmapsListComponent = () => {
    const [campaignList, setCampaignList] = useState([
        { id: 1, name: "Roadmap1" },
        { id: 2, name: "Roadmap2" },
        { id: 3, name: "Roadmap3" },
        { id: 4, name: "Roadmap4" },
        { id: 5, name: "Roadmap5" }
    ]);
    const { url } = useRouteMatch();

    return (
        <div style={{ width: "90%" }}>
            {campaignList.map(({ id, name }) => (
                <div key={id}>
                    <Link to={generatePath(`${url}/:id`, { id })}>{name}</Link>
                </div>
            ))}
        </div>
    );
};

export default RoadmapsListComponent;