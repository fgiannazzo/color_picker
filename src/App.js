import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';
import { generatePalette } from './colorHelpers';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={() => <h1>INDIVIDUAL PALETTE GOES HERE</h1>}
      ></Route>
    </Switch>

    // <div className="App">
    //  <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
