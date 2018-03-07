import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import Home from './components/Home'
import Gallery from './components/Gallery'

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="component-container">
            <Route exact path='/' component={Home} />
            <Route path='/gallery' component={Gallery} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
