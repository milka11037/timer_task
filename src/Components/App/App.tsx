import React from 'react';
import './App.module.scss';
import { Timer } from '../Timer/Timer';
import { Messages } from '../Messages/Messages'
import { Form } from '../Form/Form'
import styles from '../App/App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Form/>
      <Timer/>
      <Messages/>
    </div>
  );
}

export default App;
