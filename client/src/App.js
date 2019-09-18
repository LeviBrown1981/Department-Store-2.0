import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Stores from './components/Stores';
import StoreForm from './components.StoreForm';
import StoreView from './components/StoreView';
import NoMatch from './components/NoMatch';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Stores" component={Stores} />
        <Route exact path="/StoreForm" component={StoreForm} />
        <Route exact path="/stores/:id" component={StoreView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);
export default App;
