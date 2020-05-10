import React from 'react';
import { Redirect, Route } from "react-router-dom";

import Dashboard from "./dashboard/Dashboard";
import SimplePageContainer from "./simple/SimplePageContainer";

export default function AppRoutes() {
    return <>
        <Route exact path="/" render={() => <Redirect to="/dashboards" />} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/simple_page" component={SimplePageContainer} />
    </>
}