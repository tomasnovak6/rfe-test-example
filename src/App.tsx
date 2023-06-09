import React from 'react';
import './App.css';
import Tags from './components/tags/Tags';

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <h1>RFE Test Example</h1>
          </header>
          <Tags example={1} />
          <Tags example={2} />
          <Tags example={3} />
      </div>
  );
}

export default App;
