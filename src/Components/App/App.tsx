import React from 'react';
import './App.module.scss';
import { Timer } from '../Timer/Timer';
import { Messages } from '../Messages/Messages';
import { Form } from '../Form/Form'

function App() {

  return (
    <div className="App">
      <Form/>
      <Timer/>
      <Messages/>
    </div>
  );
}

export default App;
