import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './modules/createStore';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Hello />
      </Provider>
    );
  }
}

export default App;
