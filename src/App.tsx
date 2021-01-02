import React from 'react';
import { Head } from "./components/Head";
import './App.css';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App App-header">
      <Head title="moose" isActive={false} />
      <Button onClick={value => console.log(value)} />
    </div>
  );
}

export default App;
