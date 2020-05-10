import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import Dashboard from './dashboard/Dashboard';
import SimplePage from './simple/SimplePage';
import SideMenu from './sidemenu/SideMenu';
import useStyles from './useStyles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <SideMenu />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Redirect exact path="/" to="/dashboard" />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/simple_page" component={SimplePage} />
        </main>
      </Router>
    </div>
  );
}

export default App;
