import React from 'react';
import ReactDOM from 'react-dom';
import GeminiTab from './components/GeminiTab';
import TerminalTab from './components/TerminalTab';
import BraveBrowserTab from './components/BraveBrowserTab';

const App = () => {
  return (
    <div>
      <h1>Gemini and Brave Integration</h1>
      <div className="tabs">
        <GeminiTab />
        <TerminalTab />
        <BraveBrowserTab />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));