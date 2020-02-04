import React from 'react';
import './App.css';

import Jumbotron from './components/splashHero';
import Clients from './components/splashClients';
import Works from './components/splashWorks';

class App extends React.Component {

  render () {

    return(
      <div>
        <Jumbotron />
        <Clients />
        <Works />
      </div>
    )
  }
}

export default App;
