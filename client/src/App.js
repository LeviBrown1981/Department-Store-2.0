import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import styled from "styled-components";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Stores from './components/Stores';
// import StoresForm from './components.StoresForm';
import StoreView from './components/StoreView';
import NoMatch from './components/NoMatch';


const App = () => (
  <Fragment>
    <Navbar />
    <AppContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Stores" component={Stores} />
        {/* <Route exact path="/StoresForm" component={StoresForm} /> */}
        <Route exact path="/stores/:id" component={StoreView} />
        <Route component={NoMatch} />
      </Switch>
    </AppContainer>
  </Fragment>
);

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, violet, black);
`;

const Transparent =styled.div`
  background: transparent !important;
`;

const fontSize = (size) => {
  switch(size) {
    case 'large':
      return '40px';
    case 'small':
      return '25px';
    default:
      return '20px';
  }
};

export default App;
