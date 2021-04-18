import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import RoadmapDetailComponent from "./components/RoadmapDetail";

const CampaignComponent = () => {
    const { path } = useRouteMatch();

    return (
        <div className="campaign-list">
            <Switch>
                <Route path={`${path}/:id`} component={CampaignDetailComponent} />
            </Switch>
        </div>
    );
};

export default CampaignComponent;
