import React from 'react';
import { Head } from "./components/Head";
import './App.css';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App App-header">
      <Head title="moose" isActive={false} />
      <Button onClick={e => {
        e.preventDefault()
        console.log(e)
      }}
      >
        Hello FC
      </Button>
    </div>
  );
}

export default App;
