import React from 'react';

import { Timer } from '../Timer/Timer';
import { Messages } from '../Messages/Messages';
import { Form } from '../Form/Form';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Form/>
      <Timer/>
      <Messages/>
    </div>
  );
};

export default App;
