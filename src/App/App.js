import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>React Pinterest</h2>
        <button className="btn btn-dark"><i class="fab fa-pinterest fa-3x"></i></button>
      </div>
    );
  }
}

export default App;
