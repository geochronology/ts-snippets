import React from 'react';
import { Head } from "./components/Head";
import './App.css';

function App() {
  return (
    <div className="App App-header">
      <Head title="moose" isActive={false} />
    </div>
  );
}

export default App;
