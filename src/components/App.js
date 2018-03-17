import React, { Component } from 'react';
import './App.css';
import NewsContainer from './News/NewsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Newsfeed</h1>
        </header>
        <NewsContainer />
      </div>
    );
  }
}

export default App;
