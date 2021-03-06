import React from 'react';
import { Head } from "./components/Head";
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { GlobalProvider } from './components/GlobalState';
import { ReducerButtons } from './components/ReducerButtons';

function App() {
  return (
    <GlobalProvider>
      <div className="App App-header">
        <Head title="moose" isActive={false} />
        <Button onClick={e => {
          e.preventDefault()
          console.log(e)
        }}
        >
          Hello FC
      </Button>
        <ReducerButtons />
        <Input />
      </div>
    </GlobalProvider>
  );
}

export default App;
